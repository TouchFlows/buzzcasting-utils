# The h2j/j2h conversion: `html2json`/`json2html`

`buzzcasting-app` authors a slide in the builder as a JSON tree, and renders it as real HTML — `window.__bc.h2j`/`window.__bc.j2h` (per that repo's own `CLAUDE.md`) are exactly `html2json`/`json2html` from this package (`buzzcasting-app/src/global/options.ts`: `h2j: html2json, j2h: json2html`). This is one of the highest-value, highest-risk files in the whole stack — the entire builder's persisted data model round-trips through this one hand-rolled parser — so it's worth understanding precisely rather than skimming.

Both functions live in `src/utils/html2json.ts`; the actual tag/attribute tokenizer they're built on is `HTMLParser` in `src/utils/htmlparser.ts` — a manually-ported, SAX-style pure-JS HTML parser (the classic John Resig/Erik Arvidsson parser, not a real spec-compliant HTML5 parser).

## The JSON node shape

Every node in the tree is one of four kinds, distinguished by `node`:

```ts
{ node: "root", child: [...] }
{ node: "element", tag: string, attr?: {...}, child?: [...] }
{ node: "text", text: string }
{ node: "comment", text: string }
```

This is the shape `IJsonWidget.ts` types as `JsonChild` (`{node, tag, attr, child}`), and it's exactly what a slide's stored JSON tree, and a builder template's `child: [...]` definition, are made of.

## `html2json(html)`: how parsing actually builds the tree

`HTMLParser` is invoked with four callbacks (`start`, `end`, `chars`, `comment`) and a single mutable stack, `bufArray` — the currently-open element is always `bufArray[0]`:

- **`start(tag, attrs, unary)`** — builds `{node:"element", tag}`. If `unary` (a self-closing/void tag like `<img>`), the node is pushed straight into the current parent's `child[]` and the stack is untouched. Otherwise it's unshifted onto `bufArray` — it stays "open" until its matching `end` callback fires.
- **`end(tag)`** — shifts the top of `bufArray` off (that's the element closing now) and pushes it into whichever is now `bufArray[0]`'s `child[]` (or `results.child[]` if the stack is empty, i.e. this was a top-level element). Also does a sanity check: `if (node.tag !== tag) console.error("invalid state: mismatch end tag")` — this only logs, it doesn't throw or repair the tree, so a genuinely malformed close-tag sequence produces a warning and a silently-wrong tree, not a hard failure.
- **`chars(text)`** / **`comment(text)`** — pushed as `{node:"text"|"comment", text}` into whatever the current parent is.

### Attribute handling — the part most worth knowing

```ts
if (value.match(/ /)) {
  if (!["title", "transform", "viewBox", "widget"].includes(attr.name)) {
    value = value.split(" ");
  }
}
```

**Any attribute value containing a space is split into a string array** — this is the mechanism behind every `class="foo bar baz"` or `css-body="text-3xl font-serif"` attribute becoming a JSON array of individual class tokens rather than one string, which is what lets the builder's Tailwind-class-editing UI (Tagify inputs, etc.) manipulate individual classes as list items. Exactly four attribute names are exempted from this split (`title`, `transform`, `viewBox`, `widget`) because their space-containing values are meant to stay one string (an SVG `transform`/`viewBox` value, a tooltip `title`, or — notably — the `widget` attribute itself, presumably because a widget's identifying value should never be accidentally tokenized). **If you ever need a new attribute whose value legitimately contains spaces but must stay a single string, it has to be added to this hardcoded exemption list, or it will silently become an array instead.**

A second rule applies when the same attribute name appears more than once on one element: the second occurrence merges into an array with the first (`pre[name] = [pre[name], value]`), and a third+ occurrence pushes onto that array. Repeated identically-named attributes are not something normal HTML has, but this defensive merge exists regardless.

## `json2html(json)`: the exact inverse, with one hardcoded quirk

Recursively rebuilds an HTML string: `attr` object keys become `key="value"` pairs (array values re-joined with spaces — the literal inverse of the split above), and `node:"root"` just concatenates its children's HTML with no wrapper. The one asymmetry from `html2json` is the **HTML4 "empty elements" list** (`area, base, basefont, br, col, frame, hr, img, input, isindex, link, meta, param, embed`) — any element whose tag is in that list is always emitted self-closed (`<tag attr="value"/>`) regardless of whether it actually has children in the JSON (it structurally shouldn't, for these tags, but nothing enforces that on the way in). Note this list is **not** identical to the real HTML5 void-element list (missing `area` is actually present; missing from this list vs. HTML5's actual void set: `wbr`, `track`, `source`, `keygen`, `command` aren't included, while `basefont`/`frame`/`isindex` are obsolete HTML4-only tags included here that HTML5 doesn't have at all) — a cosmetic mismatch, not something that's caused a known bug, but worth knowing if you're ever debugging why a particular tag round-trips (or doesn't) as self-closing.

## Known limitations worth carrying forward

- **No real error recovery.** A mismatched end tag only logs a console error; the resulting tree can still be structurally wrong (a node ending up in the wrong parent's `child[]`) with no exception thrown anywhere in the call chain.
- **Not a spec-compliant HTML5 parser.** It's a manually-ported classic pure-JS parser predating the WHATWG HTML5 parsing algorithm — edge cases around implicit tag closing, foreign content (SVG/MathML), or malformed markup that a real browser parser or `DOMParser` would handle gracefully may not round-trip correctly here. This is presumably an accepted tradeoff since the builder controls what markup actually gets fed through this (it never needs to parse arbitrary third-party HTML), but it's not a general-purpose HTML parser and shouldn't be reached for as one.
- **The space-splitting exemption list is a fixed, hardcoded set of four attribute names** (`title`/`transform`/`viewBox`/`widget`) — not configurable, not derived from any schema. Adding a new space-containing-value attribute anywhere in the stack means either accepting it'll be split into an array, or extending this list.

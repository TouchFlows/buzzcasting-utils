# Architecture

`buzzcasting-utils` is the shared vocabulary package for the whole BuzzCasting front-end stack: `buzzcasting-app`, `buzzcasting-storage`, and every tenant repo (`admo`, `aramco`, `axa`, …) depend on it for their data types, shared constants, and a handful of cross-cutting helper functions. It has no components, no rendering, no state of its own — it's pure types + constants + functions.

`docs/` in this repo is typedoc-generated API reference (`npm run docs`, entry point `src/index.ts`) and is overwritten every run — don't hand-edit it or duplicate its content here. This `documentation/` folder is for the things typedoc can't capture on its own: how the pieces relate, which of several near-duplicate types is the one that actually matters, and where the declared shape of something disagrees with how it's actually used at runtime.

**Also worth knowing up front**: the root `README.md` in this repo is, word for word, `buzzcasting-storage`'s README (a copy-paste mismatch, not a description of this package at all) — see the note there once corrected, and don't trust it as a description of what this package does until it's fixed.

## The three folders

```
src/
├── interfaces/   43 files — every data shape moved between the backoffice API, storage, and the UI
├── enums/        API, CSS, EVENTS, MODERATION, ShapeType, STORAGE — shared string constants
└── utils/        44 files — small, mostly-pure helper functions
```

All three are re-exported wholesale from `src/index.ts` (`export * from "./enums"`, `"./utils"`, `"./interfaces"`) — so `import { X } from 'buzzcasting-utils'` reaches everything **except** the handful of files documented as unreachable in [known-issues.md](./known-issues.md) (some interfaces aren't actually exported from the `interfaces` barrel, and `ShapeType` is oddly reachable only through that barrel rather than the `enums` one).

## `interfaces/`: the shapes that flow through the whole stack

The interfaces worth knowing first, because almost everything else is built from them:

- **`IQuery`** — an API request/fetch descriptor. Has a blanket `[x: string]: any` index signature *plus* ~20 named optional fields, so it provides real typing for known fields but no protection against arbitrary extra ones. `IQuery.type` is the single discriminator used everywhere downstream in `buzzcasting-storage` to pick a REST path segment, a Dexie table, and a response-handling branch — see that package's own `documentation/architecture.md`.
- **`IResponse`** — the canonical API response envelope: `{ data: IDashboards|IImages|IMessages|ISeries|ICloud|ISlides|IPresentations|IPreferences|IWidgets|null, message, success, query? }`. This is what every `Widget` callback in `buzzcasting-storage` receives. A second, near-duplicate envelope (`IApiResponse`) also exists and is exported — see [type-inconsistencies.md](./type-inconsistencies.md) for why you should use `IResponse`, not `IApiResponse`.
- **`ISeries`** / **`ICloud`** / **`IMessages`** — the three "live widget data" shapes (matching `buzzcasting-storage`'s three supported `Widget` query types). `ISeries` in particular has a confirmed, real mismatch between its declared type and how it's actually read at runtime — see [type-inconsistencies.md](./type-inconsistencies.md), this is probably the single most important thing to understand before touching series data anywhere in the stack.
- **`IGraph`** / **`IGraphStyle`** — the newer, unified graph shape (`{items:[{points:[{x,y}]}]}`) and its unrelated visual-style-config namesake. See `buzzcasting-app`'s `documentation/graph-widget.md` for how these normalize `ISeries`/`ICloud` into one shape.
- **`IStorageOptions`** — the app boot-config object, `window.__bc.opts`'s real type in `buzzcasting-app`. Required fields: `app`, `locale`, `presentation`, `storage`, `version`.
- **`IOptions`** (`ICardOptions`/`ICloudOptions`/`ISeriesOptions`/`IGraphOptions`/`IContentsOptions`) — the "resolved, ready-to-render" config tree each widget shell computes from its own `@Prop`s and hands down to its inner component as `this.options`.
- **`IJsonWidget`** — the generic JSON-tree node shape (`{node, tag, attr, child}`) that a slide's builder-authored JSON is actually made of — the input/output of the `html2json`/`json2html` conversion, see [html-json-conversion.md](./html-json-conversion.md).

The full 43-file inventory, including several duplicate/overlapping "layout tree" and "response envelope" interfaces that are easy to reach for the wrong one, is in [type-inconsistencies.md](./type-inconsistencies.md).

## `enums/`: shared constants, each with a specific double life

- **`API`** — 17 members (`CLOUD`, `SERIES`, `MESSAGES`, `WIDGET`/`WIDGETS`, `DASHBOARD`/`DASHBOARDS`, `PRESENTATION`/`PRESENTATIONS`, `PREFERENCE`/`PREFERENCES`, `SLIDE`/`SLIDES`, `IMAGES`, `TEMPLATES`, `TOPICS`, `CARDS`). Does double duty as both an `IQuery.type`-adjacent tag *and* a literal Dexie/IndexedDB table name in `buzzcasting-storage` — but its member list doesn't line up 1:1 with `IQuery.type`'s own hand-written union (see [type-inconsistencies.md](./type-inconsistencies.md)).
- **`CSS`** — 20 members, every one a `console.log` `%c`-style CSS string (`CSS.WIDGET`, `CSS.ERROR`, `CSS.OK`, `CSS.KO`, …), keyed by subsystem/status. Confirmed sole use across the whole stack is devtools log styling — nothing else reads these values.
- **`EVENTS`** — 65 members, the shared custom-DOM-event-name registry that every `@Listen`/`@Event` decorator and `sendEvent()`/`broadcastEvent()` call in `buzzcasting-app` is keyed on. Two literal typos live in here permanently (a member name and a value) — see [known-issues.md](./known-issues.md).
- **`MODERATION`** — `APPROVED`/`BEFORE`/`DELAYED`/`NONE`/`REALTIME`, drives this package's own `widget.ts`'s `moderation()` query-mutator, consumed by every `buzzcasting-storage` storage backend.
- **`STORAGE`** — the 5 storage-backend names `buzzcasting-storage` switches on (`dexie`/`keyval`/`local`/`session`/`window`) — see that package's `documentation/storage-backends.md` for the real, confirmed bug in how two of these five are wired up.
- **`ShapeType`** — `MultiPolygon`/`Polygon`, GeoJSON geometry discrimination for the globe/map widgets.

## `utils/`: small helpers, several with a forked "shadow copy" living in `buzzcasting-app`

The single most important thing to know about this folder, if you're about to write new code that needs one of these: **check [known-issues.md](./known-issues.md) first** — several of these functions have a *second*, independently-maintained copy hand-written inline somewhere in `buzzcasting-app`, and the two copies have quietly diverged in behavior (`flatten`, `intToString`, `send-event`, `debounce`, `emojis`). Importing the wrong one, or writing a third copy, is an easy trap.

Worth knowing as core, load-bearing utilities:

- **`html2json`/`json2html`** — the `h2j`/`j2h` conversion at the center of how a slide is authored vs. rendered. Full write-up in [html-json-conversion.md](./html-json-conversion.md).
- **`log`** — posts `{action:"log", level, message}` onto a `BroadcastChannel("logging")`; does **not** call `console.*` itself. The numeric `level` scale isn't defined anywhere in this package — the actual `console.*` gating against `window.__bc.LOG_LEVEL` happens entirely in `buzzcasting-app`'s own listener (`src/storage/logging/`). If you're trying to understand what `log(3, [...])` vs `log(4, [...])` means, you have to look there, not here.
- **`uniq`** — short random base-36 ID generator with collision-retry against a supplied "existing ids" list; this is what generates every new section/widget/zone id in `buzzcasting-app`'s builder (`` `w${uniq()}` ``, `` `s${uniq()}` ``, …).
- **`hashSum`** — deterministic object hashing, the basis of `buzzcasting-storage`'s change-detection ("did this API response actually change") logic.
- **`camelCase`/`camelToHyphen`** — the two halves of the `dataWidget` (`@Prop`) ↔ `data-widget` (HTML attribute) convention used by every widget shell.
- **`widget.ts`**'s `getKey`/`widgetParams`/`moderation` — query-shaping helpers consumed throughout `buzzcasting-storage`.

## The `Window.__bc` stub is not the real shape — don't trust it

`src/index.ts` declares:

```ts
declare global {
  interface Window {
    __bc: {
      logger: Worker;
      opts: any;
    };
  }
}
```

This is aspirational/stale, not authoritative, on both fields:

- `logger: Worker` — nothing anywhere in `buzzcasting-utils`, `buzzcasting-app`, or `buzzcasting-storage` ever assigns `window.__bc.logger`. The real logging transport is a `BroadcastChannel("logging")` (see `log.ts` above), and `buzzcasting-app`'s own `Window.__bc` augmentation has no `logger` field at all — it has `log`, `LOG_LEVEL`, and `logging` instead.
- `opts: any` — real call sites (including this package's own `sanitize.ts`, which reads `window.__bc.opts.suspended`) treat `opts` as a concrete object. `buzzcasting-app`'s own augmentation correctly types it as `opts: IStorageOptions` — importing the very interface this package already defines. The `any` here just throws that safety away for anyone who *only* has this package's declaration in scope.

TypeScript merges every `declare global { interface Window {...} }` block across a project's compiled sources, so in practice, inside `buzzcasting-app`, its own much richer augmentation (`src/global/index.ts`, ~30 fields: `active`, `api`, `builder`, `components`, `layout`, `h2j`/`j2h`, `storageManager`, …) is what actually governs `window.__bc.*`. A consumer that pulls in *only* `buzzcasting-utils` (no `buzzcasting-app` in its dependency graph) would see just `{logger, opts}` — worth keeping in mind if a tenant repo or a new package ever depends on `buzzcasting-utils` alone.

## Related reading

- [type-inconsistencies.md](./type-inconsistencies.md) — declared-vs-actual shape mismatches, and which of several overlapping "same concept" interfaces is the one that actually matters.
- [html-json-conversion.md](./html-json-conversion.md) — the `html2json`/`json2html` (`h2j`/`j2h`) algorithm.
- [known-issues.md](./known-issues.md) — confirmed bugs, dead code, and forked/diverged utility functions.

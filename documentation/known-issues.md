# Known issues and inconsistencies

Concrete, confirmed issues — not hypothetical concerns. The type-shape mismatches (`ISeries.items`, duplicate layout/response interfaces, `IQuery.type` vs. `API` drift) are documented separately in [type-inconsistencies.md](./type-inconsistencies.md); this file covers everything else: real bugs, dead code, and utility functions that have been forked and diverged elsewhere in the stack.

## README describes the wrong package

The root `README.md` is, word for word, `buzzcasting-storage`'s README ("This is a wrapper class to use multiple storage options with BuzzCasting... Currently supported are: Local Storage, Session Storage, IDB Keyval, Dexie, Window object") — a copy-paste mismatch, not a description of this package. If you're reading it expecting an overview of `buzzcasting-utils`, it isn't one; start from this `documentation/` folder instead.

## ✅ `deepMerge` didn't return anything — fixed

`src/utils/deep-merge.ts` computed a merged object via `.reduce()` but never returned it — `deepMerge(...)` always evaluated to `undefined`. Fixed by adding the missing `return`. This mattered beyond a stylistic nit: `buzzcasting-app`'s `series-widget.tsx`/`cloud-widget.tsx`/`graph-widget.tsx` all call `this.options = deepMerge([this.options, options])` inside their `@Method() setOptions()` — before this fix, calling `setOptions()` on any of those widget shells would have set `this.options` to `undefined` rather than the merged result. It was latent rather than actively visible, since the regular render path builds `this.options` via each shell's own `getOptions()`/`xxxOptions(this.el)` helper (which doesn't go through `deepMerge`) — `setOptions()` is a separate, externally-callable `@Method()`, not part of the normal render path.

## ✅ Two literal typos in the `EVENTS` enum — fixed

`LAUPPUT_UPDATE` (member name; value `"layoutUpdate"` was already correct) has been renamed to `LAYOUT_UPDATE`, and `WS_API_UPDATE`'s value `"wsApiRUpdate"` (stray `R`) has been corrected to `"wsApiUpdate"`. Both were confirmed to have zero consumers anywhere in `buzzcasting-app`, `buzzcasting-storage`, or any tenant repo before fixing — neither the enum member nor the raw string value was referenced anywhere outside this one declaration, so this was a safe, no-blast-radius cleanup rather than a coordinated cross-repo rename.

## `rtl()` and `dir()` disagree about Malayalam

`src/utils/rtl.ts` exports two functions meant to answer the same question (given a message, is it right-to-left?) but they don't agree: `rtl(message)` only treats `language === 'ar'` as RTL, while `dir(message)` treats both `'ar'` **and** `'ml'` (Malayalam — actually a left-to-right script; this looks like a copy-paste languageCode mistake rather than a deliberate RTL exception) as RTL. If a card component ends up calling one and a sibling calls the other, they can disagree about the same message's direction.

## `IGridLayout` not being barrel-exported has caused a real, silenced breakage

`IGridLayout` (in `IGridLayout.ts`) is not exported from `src/interfaces/index.ts`. `buzzcasting-app/src/widgets/cards-widget/cards-widget.tsx` references it anyway:
```ts
//@ts-ignore
const cells: IGridLayout = this.options.grid
```
with no import at all — this only "works" because the `@ts-ignore` on the line above suppresses the resulting compiler error. This is concrete evidence (not a hypothetical) that omitting an interface from the barrel has caused real downstream breakage, silenced rather than fixed. Several other interfaces (`IAnimation`, `IBubbles`, `ICardImage`, `ICardsGrid`, `IConfig`, `IDate`/`ITime`/`IDateFormat`, `IDimensions`, `IGlobe`, `IItemData`/`Item`, `IWords`) have the same barrel gap, though no other confirmed-broken consumer was found for those — `IGridLayout` is just the one that's actually been hit.

## Utility functions with a diverged "shadow copy" elsewhere in the stack

Check this list before importing (or worse, re-implementing) one of these — the version you reach for may not be the one another part of the codebase is actually relying on.

- **`flatten(obj)`** (`src/utils/flatten.ts`) — recursively flattens nested objects into hyphen-joined keys, dropping empty-string leaves. `buzzcasting-app` has **two more** independently hand-copied versions (`src/builder/init/flatten.ts`, and an inline method in `src/builder/input/input-widget/input-widget.tsx`) that both add one behavior this file doesn't have: every non-array **string** leaf value gets `.split(' ')`'d into an array. That's a genuinely different algorithm, not just a copy — the app-local forks exist specifically to turn space-separated CSS-class-like attribute values into arrays, which this package's generic version doesn't do. Don't assume they're interchangeable.
- **`intToString(num, digits, abbreviate, locale)`** (`src/utils/int-to-string.ts`) — the canonical large-number abbreviator (`1234 → "1.2k"`), confirmed imported from this package in ~26 widget files. **Five files instead hand-roll their own inline copy**: `graph-total.tsx`, `kpi-evolution.tsx`, `simple-kpi.tsx`, `graph-kpi-total.tsx`, `graph-horizontal-bar.tsx`. At least one of those (`graph-total.tsx`'s, which `graph-kpi-total.tsx` in turn copied) has a real behavior difference: its `num < 1000` branch just returns `num` unrounded, where this package's canonical version applies proper rounding/`toFixed` — meaning non-integer values under 1000 render differently depending on which copy a given component happens to use. There is also a **third** overlapping implementation, `number-formatter.ts`'s `numberFormatter(num, digits)`, using yet another SI-prefix table shape (`{value,symbol}` instead of `{v,s}`) with no `abbreviate`/`locale` params at all — `hashtags-table.tsx` imports both `intToString` and `numberFormatter` side by side for different fields, so this isn't dead code, just a third overlapping approach to the same problem living alongside the other two.
- **`sendEvent(name, detail, target)`** (`src/utils/send-event.ts`) — **not exported from this package's barrel at all**, and not used anywhere in `buzzcasting-app`, which instead maintains its own, differently-shaped `src/global/utils/send-event.ts` (this package's version takes a `'window'|'document'` string for the target; `buzzcasting-app`'s takes an actual `Window`/`EventTarget` object). This package's copy is effectively dead code from the app's point of view — everything in `buzzcasting-app` calls its own local version.
- **`emojis.ts`**'s `emojiRegex`/`extEmojiRegex` — also not exported from the barrel, also unused downstream; `wordcloud-d3.tsx` hand-rolls its own simpler private regex instead.
- **`debounce`** (`src/utils/debounce.ts`) — `buzzcasting-app` also has its own `src/global/utils/debounce.ts`. Not diffed line-by-line, but flagging the same naming-collision pattern as the others above for anyone who goes to use either.

## Other dead/unreachable code

- **Not exported from the `utils` barrel and confirmed unused downstream**: `emojis.ts`, `send-event.ts` (both above), plus `word-count.ts`'s `countWords`.
- **Not exported from the `interfaces` barrel, and no confirmed downstream consumer at all** (beyond being used internally by other, exported interfaces — see below): `IAnimation`, `IBubbles`, `ICardImage`, `ICardsGrid` (file is misnamed `ICatrdsGrid.ts`), `IConfig`, `IDate`/`ITime`/`IDateFormat`, `IDimensions`, `IGlobe`, `IItemData`/`Item`, `ISlideLayout`, `IWords`, `Layout.ts`'s exports. Several of these (`IAnimation`, `IBubbles`, `ICardImage`, `ICardsGrid`, `IConfig`, the `IDateTime` types, `IDimensions`, `IGlobe`, `IWords`) are still reachable *indirectly* — they're used as field types inside `IOptions.ts`'s exported interfaces (`ICardOptions`, `ICloudOptions`, etc.) — so their shapes matter even though you can't `import { IAnimation } from 'buzzcasting-utils'` directly.
- **`ApiData`** — dead, see [type-inconsistencies.md](./type-inconsistencies.md).
- **`IApiResponse`, `ICloudInfluencers`/`ICloudInfluencersData`, the `ID3Options` family, `IEchartsLine`, `IRotatingGlobe`, `ISlides`** — exported from the barrel, but no confirmed consumer found anywhere in `buzzcasting-app`/`buzzcasting-storage`. Not necessarily wrong to keep, but don't assume any of these are load-bearing before changing their shape.
- **`src/interfaces/Layout.ts`** and **`src/interfaces/ISlideLayout.ts`** — see [type-inconsistencies.md](./type-inconsistencies.md); neither is reachable from the barrel, and `Layout.ts` isn't even imported internally within this package.

## Test coverage is thin

Only two files exist under `test/`: `constants.test.ts` (checks 2 of `STORAGE`'s 5 members — nothing else in any enum is tested) and `graph-normalize.test.ts` (covers `seriesToGraph`/`cloudToGraph` reasonably well). Everything else — `html2json`/`htmlparser` (arguably the highest-risk file in the package, see [html-json-conversion.md](./html-json-conversion.md)), `intToString`, `hashSum`, `Snowflake`, the now-confirmed-buggy `deepMerge`, and every other util — has no test coverage at all. If you're fixing any of the bugs on this page, there's no existing regression test protecting the current (broken) behavior, which cuts both ways: nothing will stop you from fixing it, but nothing was stopping the bug from being introduced either.

# Type-vs-reality mismatches, and which duplicate to trust

This package's `src/interfaces/` grew organically, and in a few places multiple interfaces model the same real-world concept with different (and non-interchangeable) shapes, or a declared type disagrees with how it's actually used at runtime. This file exists so the next person (very possibly future-you) doesn't have to rediscover which one is load-bearing by trial and error.

## `ISeries.items` — the most important one to know

```ts
// src/interfaces/ISeries.ts
export interface ISeries {
  topic: string;
  title: string;
  items?: IItemData;   // IItemData = { data: Item[] }, Item = { label: string; count?: number }
  series: ISeriesData[];
  category: ICategory;
  metrics?: IMetrics;
  indicators?: IIndicators;
  timestamp?: number;
}
```

`items` is declared as a **single** `IItemData` object. The actual runtime shape used by `buzzcasting-app`'s `series-echarts.tsx` (and by this package's own `graph-normalize.ts`, added to formalize a normalized view over it) treats `series.items` as an **array**, of objects shaped like `{ name?, color?, data: [{ timestamp, count }] }` — a `data[]` field the declared `Item` type doesn't have at all (`Item` only has `label`/`count?`). Every real access to this shape in `buzzcasting-app` is wrapped in `//@ts-ignore`, which is itself evidence the mismatch is known and has been worked around rather than fixed.

**Practically**: if you're consuming `ISeries.items`, ignore the declared type and assume the array-of-`{name,data:[{timestamp,count}]}` shape instead (or, better, go through `graph-normalize.ts`'s `seriesToGraph()`, which already encodes this reality). Don't trust `IItemData`/`Item` as written.

Separately, `ISeries.series: ISeriesData[]` (with `current?`/`previous?`/`current_category?`/`previous_category?`/`metrics` fields) is a **second, independent convention** for carrying what's conceptually the same "series data" — in practice, different backoffice widgets populate `items` or `series` (or neither, falling back to top-level `metrics`/`indicators`), not both consistently. `ISeries` is really three or four different runtime shapes wearing one type declaration. `seriesToGraph()` only normalizes the `items[].data[]` convention — the `series[]`-based conventions are explicitly out of scope for it (see its own doc comment).

## Duplicate response envelopes: use `IResponse`, not `IApiResponse`

Two interfaces both model "the shape of an API response," exported side by side from the barrel:

- **`IResponse`** (`IResponse.ts`) — `{ data: IDashboards|IImages|IMessages|ISeries|ICloud|ISlides|IPresentations|IPreferences|IWidgets|null, message, success, query? }`. This is the one actually used throughout `buzzcasting-storage` and `buzzcasting-app` (every `Widget` callback, every `ApiClient` method).
- **`IApiResponse`** (`IApiResponse.ts`) — a near-identical but not-identical shape using the raw array/singular interfaces (`IDashboard[]`, `IMessage[]`, …) instead of the plural wrapper interfaces `IResponse` uses. No consumer in `buzzcasting-app` or `buzzcasting-storage` was found importing this by name — it looks like an earlier draft of `IResponse` that was never removed.

**Use `IResponse`.** Treat `IApiResponse` as legacy/orphaned unless you find a real consumer of it.

## Three independent attempts at "the slide layout tree"

There are three interfaces in this package alone modeling a slide's layout structure, plus a fourth copy forked into `buzzcasting-app` itself:

- **`ILayout.ts`** — **exported** from the barrel, and (per `buzzcasting-app`'s own `CLAUDE.md`) the shape `window.__bc.layout` actually is: `{ sections, slide, widgets, zones }`, each keyed by an index-signature bag. **This is the one that matters.**
- **`ISlideLayout.ts`** — **not exported** from this package's barrel, and not imported anywhere within this package's own `src/` either. Its own field set (`Sections/Slide/Widgets/Widget/Child/Attr/Settings/Content/Zones/Zone`) is, field-for-field, the same tree `buzzcasting-app` actually uses for its layout typing — but `buzzcasting-app` maintains its **own independent copy** of this exact interface at `src/global/interfaces/ISlideLayout.ts` rather than importing it from here (unsurprising, since it isn't reachable from the barrel). If this package's version and the `buzzcasting-app`-local copy ever drift, there's no mechanism that would catch it.
- **`Layout.ts`** — **not exported**, not imported internally either. A third, independent rewrite of the same concept (own `ILayout`, `ILayoutSections`, `ILayoutSection`, etc. — same names as `ILayout.ts`'s exports but different field sets) plus a grab-bag of one-off leftover types (`Attr8`, `Attr9`, `Attr12`, `ICardAttr`, `ICloudAttr`) that don't appear to connect to anything else in the file. Reads as an abandoned scratch/experimental file.

**If you need the layout tree's type, use `ILayout` from this package.** If you're working inside `buzzcasting-app` specifically, be aware it has its own local fork of a *differently-named* interface (`ISlideLayout`, not `ILayout`) that happens to model the same tree — the two aren't the same import, don't assume changing one updates the other.

## `IQuery.type` vs. the `API` enum — two "same concept" lists that have drifted

`IQuery.type` is a hand-written string-literal union:
```ts
"cloud" | "messages" | "series" | "preference" | "proxy" | "slide" | "dashboard" | "widget" | "presentations"
```
The `API` enum has 17 members, including several with no counterpart in the union above at all (`CARDS`, `DASHBOARDS`, `IMAGES`, `PREFERENCES`, `PRESENTATION`, `SLIDES`, `TEMPLATES`, `TOPICS`, `WIDGETS`) — and `IQuery.type`'s own `"proxy"` has no `API` enum member at all. Note the inconsistent pluralization baked into both lists independently (`slide` singular but `presentations` plural in the `IQuery.type` union; both a singular and plural version of nearly every concept exist as separate `API` members) — this isn't a typo, it reflects that some concepts are queried as one record (`slide`) and others as a collection (`presentations`), but the two lists were clearly maintained by hand, separately, and have genuinely drifted apart rather than being generated from one source of truth. `buzzcasting-storage`'s `ApiClient.loadSlide` is a concrete casualty of this: it sets `query.type = "slides"` (plural), a value that isn't even a member of `IQuery.type`'s union (see that package's own `documentation/known-issues.md`).

## `ICloud.current`/`.previous` are untyped `any[]`, despite a typed sibling existing

`ICloud.current: any[]` and `ICloud.previous: any[]` have no real shape. A separate file, `ICloudInfluencers.ts`, defines a fully-typed `ICloudInfluencersData[]` for what looks like the exact same "current/previous influencer rows" concept — but nothing wires the two together, and `ICloudInfluencers` itself has no confirmed consumer anywhere in `buzzcasting-app`/`buzzcasting-storage`. If you need to give `ICloud.current`/`.previous` real types, `ICloudInfluencersData` is the obvious starting point, not a fresh design.

## `ApiData` — confirmed dead, don't use it

```ts
export type ApiData = ISeries & IMessages & ICloud;
```

An intersection (not union) of three response shapes, exported from the barrel. Grepped across all three repos (`buzzcasting-utils`, `buzzcasting-app`, `buzzcasting-storage`) — the only occurrence of `ApiData` anywhere is this one declaration. It's dead code; don't build on it, and it's a candidate for removal if anyone's doing barrel cleanup.

## Escape hatches: `declare interface` and blanket index signatures

Several interfaces use `export declare interface X` (ambient-style declaration syntax) inside an otherwise normal module — `IItemData`, `ISeriesData`/`ICategory`/`IMetrics`/`IIndicators` (all in `ISeries.ts`), `IResponse`, `IPresentations`. The `declare` keyword has no real effect here since these are re-exported through a normal `export * from` barrel rather than truly ambient — but its presence is a signal, consistent with the mismatches above, that these were written as loose/ad-hoc typing stubs rather than carefully modeled shapes. Combined with `IQuery`'s blanket `[x: string]: any` index signature and its own `data?: any` field, don't assume any of these interfaces provide real compile-time protection beyond documenting the fields someone remembered to name.

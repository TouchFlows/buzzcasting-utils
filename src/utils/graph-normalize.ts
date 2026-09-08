import { ICloud } from "../interfaces/ICloud";
import { IGraph } from "../interfaces/IGraph";
import { ISeries } from "../interfaces/ISeries";

/**
 * Normalizes an ISeries response into the unified IGraph shape.
 *
 * Only covers the `series-echarts` convention (`series.items[i].data[]` as an
 * array of `{ timestamp, count }` points) — the runtime shape actually used
 * by that component, despite `ISeries.items` being typed as a single
 * `IItemData` object rather than an array (a pre-existing mismatch in
 * buzzcasting-utils, not introduced here).
 *
 * Series data that instead follows one of the other known-divergent
 * `ISeries` conventions (e.g. `series[].current`, `series[].metrics.*`) is
 * NOT covered — `items` will be empty/undefined for those, silently, rather
 * than throwing.
 */
export const seriesToGraph = (series: ISeries): IGraph => ({
  topic: series.topic,
  title: series.title,
  timestamp: series.timestamp,
  items: ((series.items as unknown as Array<{ name?: string; label?: string; color?: string; data?: Array<{ timestamp?: number; count: number }> }>) ?? []).map(item => ({
    name: item.name,
    label: item.label,
    color: item.color,
    points: (item.data ?? []).map(point => ({ x: point.timestamp, y: point.count })),
  })),
});

/**
 * Normalizes an ICloud response into the unified IGraph shape: every label
 * becomes a single-item graph with one point per label (category, not
 * time-series) — there is no "points over time" concept in cloud data today.
 */
export const cloudToGraph = (cloud: ICloud): IGraph => ({
  items: [
    {
      name: "labels",
      points: (cloud.labels ?? []).map(label => ({ x: label.label, y: label.count, label: label.label })),
    },
  ],
});

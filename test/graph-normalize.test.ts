import { describe, expect, it } from 'vitest'
import { cloudToGraph, seriesToGraph } from '../src/utils/graph-normalize'
import { ICloud } from '../src/interfaces/ICloud'
import { ISeries } from '../src/interfaces/ISeries'

describe('seriesToGraph', () => {
  it('normalizes the series-echarts items[i].data[] convention into items[i].points[]', () => {
    const series = {
      topic: 'topic-1',
      title: 'Views',
      timestamp: 1700000000,
      items: [
        {
          name: 'Views',
          data: [
            { timestamp: 1700000000, count: 10 },
            { timestamp: 1700003600, count: 20 },
          ],
        },
      ],
    } as unknown as ISeries

    expect(seriesToGraph(series)).toEqual({
      topic: 'topic-1',
      title: 'Views',
      timestamp: 1700000000,
      items: [
        {
          name: 'Views',
          label: undefined,
          color: undefined,
          points: [
            { x: 1700000000, y: 10 },
            { x: 1700003600, y: 20 },
          ],
        },
      ],
    })
  })

  it('returns an empty items array when items is undefined (a divergent ISeries shape not covered by this normalizer)', () => {
    const series = { topic: 't', title: 'T', series: [] } as unknown as ISeries
    expect(seriesToGraph(series)).toEqual({ topic: 't', title: 'T', timestamp: undefined, items: [] })
  })

  it('returns an empty points array when an item has no data', () => {
    const series = { items: [{ name: 'Empty' }] } as unknown as ISeries
    expect(seriesToGraph(series).items).toEqual([{ name: 'Empty', label: undefined, color: undefined, points: [] }])
  })
})

describe('cloudToGraph', () => {
  it('normalizes cloud labels into a single graph item with one point per label', () => {
    const cloud: ICloud = {
      labels: [
        { label: 'brand-a', count: 5, current: undefined },
        { label: 'brand-b', count: 3, current: undefined },
      ],
    } as unknown as ICloud

    expect(cloudToGraph(cloud)).toEqual({
      items: [
        {
          name: 'labels',
          points: [
            { x: 'brand-a', y: 5, label: 'brand-a' },
            { x: 'brand-b', y: 3, label: 'brand-b' },
          ],
        },
      ],
    })
  })

  it('returns an empty points array when labels is empty/undefined', () => {
    const cloud = {} as unknown as ICloud
    expect(cloudToGraph(cloud)).toEqual({ items: [{ name: 'labels', points: [] }] })
  })
})

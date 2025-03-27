/**
 * Series Data
 */
export declare interface ISeries {
  topic: string;
  title: string;
  series: ISeriesData[];
  category: ICategory;
  metrics?: IMetrics;
  indicators?: IIndicators;
  timestamp?: number;
}

export declare interface ISeriesData {
  name?: string;
  label?: string;
  current?: number[];
  current_total?: number;
  previous_total?: number;
  previous?: number[];
  current_category?: number;
  previous_category?: number;
}

export declare interface ICategory {
  type: string;
  data: string[];
}

export declare interface IMetrics {
  doc?: number;
  previous?: number;
  change?: number;
}

export declare interface IIndicators {
  value: number;
}
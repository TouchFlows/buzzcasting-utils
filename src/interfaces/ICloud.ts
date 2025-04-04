/**
 * Cloud
 */
export declare interface ICloud {
  labels: ILabel[];
  current: any[];
  previous: any[];
  type: string;
  total: number;
  current_total: number;
  previous_total: number;
}

export declare interface ILabel {
  label: string;
  count: number;
  info?: string;
  current: ICloudIndicators;
  previous?: ICloudIndicators;
  percentage?: number;
}

declare interface ICloudIndicators {
  total: number;
  positive: number;
  negative: number;
  neutral: number;
  engagement: number;
  reach: number;
  velocity: number;
}
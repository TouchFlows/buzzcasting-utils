import { IConfig } from "./IConfig";
import { IDate, ITime } from "./IDateTime";
import { IDimensions } from "./IDimensions";

export interface ISeriesOptions {
  colors?: string;
  css?: SeriesCss;
  time?: ITime;
  date?: IDate;
  dimensions?: IDimensions;
  show?: Show;
  config?: IConfig;
}

export interface SeriesCss {
  arrowdown: string;
  arrowup: string;
  body: string;
  brand: string;
  change: string;
  count: string;
  down: string;
  host: string;
  label: string;
  title: string;
  up: string;
  widget: string;
}

export interface Show {
  brand: boolean;
  percentage: Percentage;
  date: boolean;
  kpi: boolean;
}

export interface Percentage {
  count: boolean;
  change: boolean;
}

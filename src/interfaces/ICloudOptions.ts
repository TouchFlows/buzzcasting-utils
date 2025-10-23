import { IConfig } from "./IConfig";
import { IDate, ITime } from "./IDateTime";

export interface ICloudOptions {
  animation?: number;
  interval?: number;
  speed?: string;
  component?: string;
  css?: CloudCss;
  bubbles?: Bubbles;
  config?: IConfig;
  colors?: string;
  data?: Data;
  time?: ITime;
  date?: IDate;
  debug?: boolean;
  dimensions?: Dimensions;
  globe?: Globe;
  highlight?: Highlight;
  kpi?: Kpi;
  legend?: Legend;
  pie?: Pie;
  show?: ShowOptions;
  words?: Words;
}

export interface CloudCss {
  up: string;
  down: string;
  new: string;
  arrowup: string;
  arrowdown: string;
  chart: string;
  body: string;
  brand: string;
  count: string;
  change: string;
  highlight: string;
  highlighted: string;
  key: string;
  host: string;
  label: string;
  legend: string;
  row: string;
  separator: string;
  title: string;
  widget: string;
  words: string;
}

export interface Bubbles {
  label: string;
  size: string;
  classlist: string;
  force: number;
  color: string;
  multiplier: number;
}

export interface Data {
  dashboard: string;
  type: string;
  widget: string;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface Globe {
  border: Border;
  land: Land;
}

export interface Border {
  stroke: number;
  line: string;
}

export interface Land {
  fill: string;
}

export interface Highlight {
  label: string;
  color: string;
}

export interface Kpi {
  name: string;
}

export interface Legend {
  key: Key;
  label: Label;
  count: Count;
  width: string;
  position: string;
  show: LegendShow;
  gap: Gap;
}

export interface Key {
  width: string;
}

export interface Label {
  width: string;
}

export interface Count {
  width: string;
}

export interface LegendShow {
  percentage: boolean;
}

export interface Gap {
  column: string;
  row: string;
}

export interface Pie {
  radius: Radius;
  animation: Animation;
}

export interface Radius {
  inner: number;
  outer: number;
}

export interface Animation {
  duration: number;
}

export interface ShowOptions {
  emojis: boolean;
  brand: boolean;
  date: boolean;
  gradient: boolean;
  hashtags: boolean;
  trend: boolean;
}

export interface Words {
  duration: number;
  multiplier: number;
  padding: number;
  range: string;
}

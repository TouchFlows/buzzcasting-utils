import { IAnimation } from "./IAnimation";
import { IBubbles } from "./IBubbles";
import { IConfig } from "./IConfig";
import { ICssCard, ICssContents, ICssCloud, ICssSeries } from "./ICss";
import { IDate, IDateFormat, ITime } from "./IDateTime";
import { IDimensions } from "./IDimensions";
import { IGlobe } from "./IGlobe";
import { ILegend } from "./ILegend";
import { IPie } from "./IPie";
import { IShowCard, IShowCloud, IShowSeries } from "./IShow";
import { IWords } from "./IWords";

export interface ICardOptions {
  animation?: IAnimation;
  brand?: IBrand;
  css?: ICssCard;
  dateformat?: IDateFormat;
  debug?: boolean;
  delay?: number;
  globe?: IGlobe;
  locale?: string;
  show?: IShowCard;
}

export interface IContentsOptions {
  css?: ICssContents;
  date?: IDate;
  globe?: IGlobe;
  locale: string;
  qr?: Qr;
  time?: ITime;
  youtube?: Youtube;
}

export interface ICloudOptions {
  animation?: IAnimation;
  component?: string;
  css?: ICssCloud;
  bubbles?: IBubbles;
  config?: IConfig;
  colors?: string;
  data?: Data;
  time?: ITime;
  date?: IDate;
  debug?: boolean;
  dimensions?: IDimensions;
  globe?: IGlobe;
  highlight?: IHighlight;
  kpi?: Kpi;
  legend?: ILegend;
  pie?: IPie;
  show?: IShowCloud;
  words?: IWords;
}

export interface ISeriesOptions {
  colors?: string;
  css?: ICssSeries;
  time?: ITime;
  date?: IDate;
  dimensions?: IDimensions;
  show?: IShowSeries;
  config?: IConfig;
}

/**
 * Card
 */

export interface IBrand {
  show?: boolean;
  size?: string;
}

/**
 * Cloud
 */
export interface Data {
  dashboard: string;
  type: string;
  widget: string;
}

export interface Kpi {
  name: string;
}

export interface IHighlight {
  label?: string;
  color?: string[];
}

/**
 * Contents
 */
export interface Qr {
  text: string;
  correction: string;
  margin: number;
  scale: number;
  colorDark: string;
  colorLight: string;
  outputMode: string;
}

export interface Youtube {
  list: string;
  title: string;
}

/**
 * Series
 */
export interface Percentage {
  count: boolean;
  change: boolean;
}

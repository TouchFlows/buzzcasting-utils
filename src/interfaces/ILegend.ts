import { IShowLegend } from "./IShow";

export interface ILegend {
  key: ILegendKey;
  label: ILegendLabel;
  count: ILegendCount;
  width: string;
  position: string;
  show: IShowLegend;
  gap: ILegendGap;
}

export interface ILegendKey {
  width: string;
}

export interface ILegendLabel {
  width: string;
}

export interface ILegendCount {
  width: string;
}

export interface ILegendGap {
  column: string;
  row: string;
}

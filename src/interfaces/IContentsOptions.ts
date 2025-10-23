export interface IContentsOptions {
  css?: Css;
  date?: Date;
  globe?: Globe;
  locale: string;
  qr?: Qr;
  time?: Time;
  youtube?: Youtube;
}

export interface Css {
  body: string;
  card: string;
  globe?: string;
  label: string;
  widget: string;
}

export interface Date {
  format: string;
}

export interface Globe {
  width: number;
  height: number;
  arc: Arc;
  border: Border;
  country: Country;
  land: Land;
  sphere: Sphere;
}

export interface Arc {
  stroke: string;
  line: number;
}

export interface Border {
  stroke: string;
  line: number;
}

export interface Country {
  fill: string;
}

export interface Land {
  fill: string;
}

export interface Sphere {
  stroke: string;
  line: number;
  fill: string;
}

export interface Qr {
  text: string;
  correction: string;
  margin: number;
  scale: number;
  colorDark: string;
  colorLight: string;
  outputMode: string;
}

export interface Time {
  format: string;
}

export interface Youtube {
  list: string;
  title: string;
}

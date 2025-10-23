export interface ICardOptions {
  animation?: IAnimation;
  brand?: IBrand;
  css?: CardCss;
  dateformat?: IDateFormat;
  debug?: boolean;
  delay?: number;
  globe?: IGlobe;
  locale?: string;
  show?: IShow;
}

export interface IAnimation {
  items?: number;
  interval: number;
  animation: number;
  speed?: "" | "slow" | "slower" | "fast" | "faster";
  delay?: number;
  parentTag?: string;
}

export interface CardCss {
  avatar?: string;
  backdrop?: string;
  body?: string;
  bodylayout?: string;
  brand?: string;
  canvas?: string;
  card?: string;
  container?: string;
  dark?: boolean;
  date?: string;
  dynamics?: string;
  globe?: string;
  handle?: string;
  host?: string;
  image?: string;
  kpi?: string;
  label?: string;
  name?: string;
  play?: string;
  sender?: string;
  title?: string;
  video?: string;
  widget?: string;
}

export interface IDateFormat {
  time?: string;
  date?: string;
  locale?: string;
}

export interface IShow {
  approve?: boolean;
  avatar?: boolean;
  brand?: boolean;
  carousel?: boolean;
  date?: boolean;
  dynamics?: boolean;
  handle?: boolean;
  kpi?: boolean;
  name?: boolean;
  play?: boolean;
  sender?: boolean;
  star?: boolean;
  visible?: boolean;
  debug?: boolean;
}

export interface IGlobe {
  arc: string;
  border: string;
  country: string;
  land: string;
  sphere: string;
  width?: number;
  height?: number;
}

export interface IBrand {
  show?: boolean;
  size?: string;
}

export interface ICardOptions {
  animation?: IAnimation;
  brand?: IBrand;
  css?: ICss;
  globe?: IGlobe;
  dateformat?: IDateFormat;
  show?: IShow;
  debug?: boolean;
}

export interface IAnimation {
  items?: number;
  interval: number;
  animation: number;
  speed?: "" | "slow" | "slower" | "fast" | "faster";
  delay?: number;
  parentTag?: string;
}

export interface ICss {
  avatar?: string;
  backdrop?: string;
  body?: string;
  brand?: string;
  card?: string;
  container?: string;
  dark?: boolean;
  date?: string;
  dynamics?: string;
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

  canvas?: string;
  card?: string;
  width?: number;
  height?: number;
}

export interface IBrand {
  show?: boolean;
  size?: string;
}

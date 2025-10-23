export interface IShowCard {
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

export interface IShowCloud {
  emojis: boolean;
  brand: boolean;
  date: boolean;
  gradient: boolean;
  hashtags: boolean;
  trend: boolean;
}

export interface IShowLegend {
  percentage: boolean;
}

export interface IShowSeries {
  brand: boolean;
  percentage: boolean;
  date: boolean;
  kpi: boolean;
}

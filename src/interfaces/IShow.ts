export interface IShowCard {
  approve?: boolean;
  avatar?: boolean;
  brand?: boolean;
  carousel?: boolean;
  date?: boolean;
  dynamics?: boolean;
  handle?: boolean;
  heading?: boolean;
  kpi?: boolean;
  name?: boolean;
  play?: boolean;
  role: boolean;
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
  labels: boolean;
  legend: boolean;
  other: boolean;
  parenthesized: boolean;
  percentage: { count: boolean };
  title: boolean;
  trend: boolean;
  debug?: boolean;
}

export interface IShowContents {
  debug?: boolean;
}

export interface IShowLegend {
  parenthesized: boolean;
  percentage: boolean;
  debug?: boolean;
}

export interface IShowSeries {
  brand: boolean;
  percentage: { change: boolean; count: boolean };
  date: boolean;
  kpi: boolean;
  debug?: boolean;
}

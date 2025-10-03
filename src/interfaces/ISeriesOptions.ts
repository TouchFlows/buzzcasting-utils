export interface ISeriesOptions {
  css?: ISeriesCss;
  d3?: ISeriesD3;
  dateformat?: ISeriesDateFormat;
  show?: ISeriesShow;
  config?: ISeriesConfig;
}

export interface ISeriesCss {
  arrowdown?: string;
  arrowup?: string;
  backdrop?: string;
  body?: string;
  brand?: string;
  change?: string;
  count?: string;
  container?: string;
  date?: string;
  down?: string;
  host?: string;
  image?: string;
  label?: string;
  title?: string;
  up?: string;
  widget?: string;
  dark?: boolean;
}

export interface ISeriesDateFormat {
  time?: string;
  date?: string;
}

export interface ISeriesShow {
  brand?: boolean;
  date?: boolean;
}

export interface ISeriesD3 {
  globe: {
    colors: {
      arc: string;
      border: string;
      country: string;
      land: string;
      sphere: string;
    };
    settings?: {
      canvas?: string;
      card?: string;
      width?: number;
      height?: number;
    };
  };
}

export interface ISeriesConfig {
  fixed?: number;
  abbreviate?: boolean;
  label?: string;
}

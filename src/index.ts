export * from "./enums";

export * from "./utils";

declare global {
  interface Window {
    BuzzCasting: any;
  }
}

export declare interface IDashboards {
  dashboards: IDashboard[];
}

export declare interface IDashboard {
  id: string;
  title: string;
  project: {
    id: string;
    title: string;
  };
  commandcenter: any;
  widgets?: IWidget[];
}

export declare interface IPreference {
  id: string;
  value?: string;
  update?: number;
}

export declare interface IPresentations {
  presentations: IPresentation[];
}

export declare interface IPresentation {
  id: string;
  name: string;
  link: string;
  delay: number;
  canModerate: boolean;
  period: number;
  slide_interval: number;
  update: number;
}

export declare interface IWidgets {
  widgets: IWidget[];
}

export declare interface IWidget {
  id: string;
  title: string;
  type: string;
  filters?: any;
  custom_filters?: any;
  creation_date?: string;
  period?: string;
}

export declare interface ISlides {
  presentation: string;
  slides: any;
}

export declare interface IPreferences {
  preferences: IPreference[];
}

import type {
  ICardOptions,
  IAnimation,
  IAttachedMedia,
  ICss,
  IDateFormat,
  IShow,
  ID3,
  IBrand,
  IMessage,
  IMessages,
  ICloud,
  ICloudInfluencers,
  ICloudInfluencersData,
  ICloudOptions,
  ICloudDimensions,
  ICloudPie,
  ICloudLegend,
  ICloudBubbles,
  ICloudKpi,
  ICloudCss,
  ICloudDateFormat,
  ICloudShow,
  ICloudD3,
  ICloudConfig,
  ISeries,
  ISeriesData,
  ISeriesOptions,
  ISeriesCss,
  ISeriesDateFormat,
  ISeriesShow,
  ISeriesD3,
  ISeriesConfig,
  IStorageOptions,
  Label,
  IModal,
  ICountries,
  Countries,
  CountriesGeometry,
  Land,
  LandGeometry,
  Transform,
  ID3Bubbles,
  ID3Data,
  ID3Legend,
  ID3Pie,
  ID3Map,
  ID3Options,
  IEchartsLine,
  IRotatingGlobe,
  ICountry,
  ILand,
  IBorders,
  ISphere,
  IArc,
} from "./interfaces";
export {
  ICardOptions,
  IAnimation,
  IAttachedMedia,
  ICss,
  IDateFormat,
  IShow,
  ID3,
  IBrand,
  IMessage,
  IMessages,
  ICloud,
  ICloudInfluencers,
  ICloudInfluencersData,
  ICloudOptions,
  ICloudDimensions,
  ICloudPie,
  ICloudLegend,
  ICloudBubbles,
  ICloudKpi,
  ICloudCss,
  ICloudDateFormat,
  ICloudShow,
  ICloudD3,
  ICloudConfig,
  ISeries,
  ISeriesData,
  ISeriesOptions,
  ISeriesCss,
  ISeriesDateFormat,
  ISeriesShow,
  ISeriesD3,
  ISeriesConfig,
  IStorageOptions,
  Label,
  IModal,
  ICountries,
  Countries,
  CountriesGeometry,
  Land,
  LandGeometry,
  Transform,
  ID3Bubbles,
  ID3Data,
  ID3Legend,
  ID3Pie,
  ID3Map,
  ID3Options,
  IEchartsLine,
  IRotatingGlobe,
  ICountry,
  ILand,
  IBorders,
  ISphere,
  IArc,
};

export enum ShapeType {
  MultiPolygon = "MultiPolygon",
  Polygon = "Polygon",
}

export type ApiData = ISeries & IMessages & ICloud;

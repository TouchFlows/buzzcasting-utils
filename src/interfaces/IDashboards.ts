import { IWidget } from "./IWidgets";

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
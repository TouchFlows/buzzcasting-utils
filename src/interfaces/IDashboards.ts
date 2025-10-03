import { IWidget } from "./IWidgets";

export interface IDashboards {
  dashboards: IDashboard[];
}

export interface IDashboard {
  id: string;
  title: string;
  project: {
    id: string;
    title: string;
  };
  commandcenter: any;
  widgets?: IWidget[];
}

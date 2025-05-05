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
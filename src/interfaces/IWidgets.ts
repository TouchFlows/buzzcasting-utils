export interface IWidgets {
  widgets: IWidget[];
}

export interface IWidget {
  id: string;
  title: string;
  type: string;
  filters?: any;
  custom_filters?: any;
  creation_date?: string;
  period?: string;
}

export interface ILayout {
  sections: Object | ILayoutSections;
  slide: ILayoutSlide;
  widgets: Object | ILayoutWidgets;
  zones: Object | ILayoutZones;
}

export interface ILayoutSections {
  ["x:string"]: ILayoutSection;
}

export interface ILayoutSection {
  area: string;
  "grid-area": string;
  widgets: string[];
}

export interface ILayoutSlide {
  id: string;
  label: string;
  cols: number;
  rows: number;
  width: string;
  height: string;
  backgrounds: string[];
  zones: string[];
  interval: string;
  animation: string;
  "animation-speed": string;
}

export interface ILayoutWidgets {
  ["x:string"]: string;
}

export interface ILayoutWidget {
  node: string;
  child: IWidgetChild[];
  settings: ILayoutSettings;
  template: string;
  label: string;
  tag: string;
}

export interface IWidgetChild {
  node: string;
  tag: string;
  attr: IWidgetChildAttr;
}

export interface IWidgetChildAttr {
  ["x:string"]: string | string[];
  class: string | string[];
}

export interface ILayoutSettings {
  contents: ILayoutContent[];
  component: ILayoutComponent;
}

export interface ILayoutContent {
  editable: boolean;
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: Attr;
}

export interface ILayoutComponent {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: ILayoutMessages | ILayoutSeries | ILayoutCloud;
}

export interface ILayoutMessages {
  layout?: string;
  component?: string;
  "data-type"?: string;
  "data-dashboard"?: string;
  "data-widget"?: string;
  "show-kpi"?: string;
  "show-sender"?: string;
  "css-date"?: string[];
  "css-card"?: string[];
  "css-body"?: string[];
  "css-brand"?: string[];
  "css-handle"?: string[];
  "css-name"?: string[];
  "date-format"?: string;
  animation?: string;
  interval?: string;
  "show-brand"?: string;
  "data-order"?: string;
  index?: string;
  class?: string | string[];
  edit?: string;
}

export interface ILayoutSeries {
  "data-type"?: string;
  "data-widget": string;
  component?: string;
  "data-dashboard"?: string;
  "css-arrow-down"?: string | string[];
  "css-body"?: string | string[];
  "css-brand"?: string | string[];
  "css-change"?: string | string[];
  "css-count"?: string | string[];
  "css-down"?: string | string[];
  "css-up"?: string | string[];
  class?: string | string[];
}

export interface ILayoutCloud {
  "data-type"?: string;
  component?: string;
  "data-dashboard"?: string;
  "data-widget": string;
  "css-count"?: string[];
  "css-host"?: string;
  "kpi-name"?: string;
  "config-abbreviate"?: string;
  class?: string | string[];
}

export interface ILayoutZones {
  ["x:string"]: ILayoutZone[];
}

export interface ILayoutZone {
  label: string;
  area: string;
  "grid-area": string;
  "grid-rows": string;
  "grid-cols": string;
  "gap-x": string;
  "gap-y": string;
  padding: string;
  sections: string[];
}

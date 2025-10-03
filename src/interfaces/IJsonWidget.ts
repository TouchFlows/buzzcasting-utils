export interface IJsonWidget {
  node: string;
  child: any[] | JsonChild[];
  settings?: Settings;
  template?: string;
  label?: string;
  tag?: string;
}

export interface JsonChild {
  node: string;
  tag: string;
  attr: MessagesAttr | SeriesAttr;
  child: JsonChild[];
}

export interface MessagesAttr {
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

export interface SeriesAttr {
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

export interface CloudAttr {
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

export interface Settings {
  contents: Content[];
  component: Component;
}

export interface Content {
  editable?: boolean;
  path: string;
  query: string;
  text: string;
  node: string;
  attr: MessagesAttr;
}

export interface Component {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: MessagesAttr;
}

export interface IWidgetSettings {
  label: string;
  preview?: string;
  contents?: IWidgetContent[];
  component: IWidgetComponent;
}

export interface IWidgetContent {
  editable: boolean;
  path: string;
  query: string;
  text: string;
  node: string;
}

export interface IWidgetComponent {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: ICardAttributes;
}

export interface ICardAttributes {
  layout?: "" | "none" | "base" | "globe" | "carousel";
  component: string;
  "data-type": "messages" | "cloud" | "series" | "contents";
  "data-order"?: string;
  "data-dashboard": string;
  "data-widget": string;
  "data-limit"?: string;
  "css-avatar"?: string[];
  "css-backdrop"?: string[];
  "css-body"?: string[];
  "css-brand"?: string[];
  "css-card"?: string[];
  "css-container"?: string[];
  "css-date"?: string[];
  "css-dynamics"?: string[];
  "css-handle"?: string[];
  "css-host"?: string[];
  "css-image"?: string[];
  "css-kpi"?: string[];
  "css-label"?: string[];
  "css-name"?: string[];
  "css-play"?: string[];
  "css-sender"?: string[];
  "css-title"?: string[];
  "css-video"?: string[];
  "css-widget"?: string[];
  "date-format"?: string;
  "time-format"?: string;
  "date-locale"?: string;
  "show-approve?": boolean;
  "show-avatar"?: boolean;
  "show-brand"?: boolean;
  "show-date"?: boolean;
  "show-dynamics"?: boolean;
  "show-handle"?: boolean;
  "show-kpi"?: boolean;
  "show-name"?: boolean;
  "show-play"?: boolean;
  "show-sender"?: boolean;
  "show-star"?: boolean;
  "show-visible"?: boolean;
  "show-debug"?: boolean;
  animation?: boolean;
  interval?: string;
  speed?: string;
}

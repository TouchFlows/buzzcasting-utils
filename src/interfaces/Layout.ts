export interface ILayout {
  sections: ILayoutSections;
  slide: ILayoutSlide;
  widgets: ILayoutWidgets;
  zones: ILayoutZones;
  label: string;
}

export interface ILayoutSections {
  [x: string]: ILayoutSection;
}

export interface ILayoutSection {
  area: string;
  "grid-area": string;
  widgets: string[];
  interval?: string;
  animation?: string;
  "animation-speed"?: string;
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
  [x: string]: ILayoutWidget;
}

export interface ILayoutWidget {
  node: string;
  child?: IWidgetChild[];
  settings: IWidgetSettings;
  template: string;
  label: string;
}

export interface IWidgetChild {
  attr?: Attr;
  child?: IWidgetChild[];
  node: string;
  tag?: string;
  text?: string;
}

export interface IWidgetAttr {
  class?: string;
  edit?: string;
}

export interface IWidgetSettings {
  contents: IWidgetContents[];
  components: any[];
}

export interface IWidgetContents {
  attr: IContentAttr;
  editable: boolean;
  node: string;
  path: string;
  query: string;
  tag: string;
  text?: string;
}

export interface IContentAttr {
  class?: string | string[];
}

export interface Attr8 {
  component: string;
  "data-type": string;
  "data-dashboard": string;
  "css-arrowdown": string[];
  "css-arrowup": string[];
  "css-label": string[];
  "css-body": string[];
  "css-down": string[];
  "css-up": string[];
  "data-widget": string;
  "config-label": string;
  class: string;
}

export interface Component {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: Attr9;
}

export interface Attr9 {
  component: string;
  "data-type": string;
  "data-dashboard": string;
  "data-widget": string;
  "css-arrowdown": string[];
  "css-arrowup": string[];
  "css-label": string[];
  "css-body": string[];
  "css-down": string[];
  "css-up": string[];
  "config-label": string;
  class: string;
}

export interface Attr12 {
  class: any;
  component?: string;
  "data-type"?: string;
  "data-dashboard"?: string;
  "data-widget"?: string;
  animation?: string;
  interval?: string;
  "config-chunk"?: string;
  debug?: string;
  "config-fixed"?: string;
  "config-abbreviate"?: boolean;
}

export interface ICardAttr {
  "data-type": string;
  "data-dashboard": string;
  "data-widget": string;
  "data-moderation": string;
  "data-before": string;
  "data-delay": number;
  component: string;
  "config-fixed": string;
  "config-abbreviate": boolean;
}

export interface ICloudAttr {
  class: string[];
  component?: string;
  "data-type"?: string;
  "data-dashboard"?: string;
  "data-widget"?: string;
  colors?: string;
  "config-abbreviate"?: boolean;
  "config-chunked"?: string;
  "config-fixed"?: string;
  "config-items"?: string;
  "css-highlight"?: string[];
  "css-highlighted"?: string[];
  "css-host"?: string[];
  "css-key"?: string[];
  "css-label"?: string[];
  "css-legend"?: string[];
  "css-row"?: string[];
  "dimensions-width"?: string;
  "dimensions-height"?: string;
  duration?: string;
  interval?: string;
  items?: string;
  label?: string;
  "legend-count-width"?: string;
  "legend-gap-column"?: string;
  "legend-key-width"?: string;
  "legend-label-width"?: string;
  "legend-position"?: string;
  "pie-radius-inner"?: string;
  "pie-radius-outer"?: string;
  "show-percent"?: string;
  "pie-animation-duration"?: string;
  range?: string;
  segments?: string;
  "size-multiplier"?: string;
  "show-debug"?: boolean;
  "show-hashtags"?: boolean;
  "show-emojis"?: boolean;
  "words-multiplier"?: string;
  "words-padding"?: string;
  "word-padding"?: string;

  debug: boolean;
}

export interface ILayoutZones {
  [x: string]: ILayoutZone;
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

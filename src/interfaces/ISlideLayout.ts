export interface ISlideLayout {
  sections: Sections;
  slide: Slide;
  widgets: Widgets;
  zones: Zones;
  animation: number;
  interval: number;
  label: string;
}

export interface Sections {
  [x: string]: Section;
}

export interface Section {
  area: string;
  "grid-area": string;
  widgets: string[];
}

export interface Slide {
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

export interface Widgets {
  [x: string]: Widget;
}

export interface Widget {
  node: string;
  child: Child[];
  settings: Settings;
  template: string;
  label: string;
  type?: string;
}

export interface Child {
  node: string;
  tag: string;
  attr?: Attr;
  child: Child[];
}

export interface Attr {
  class: string[];
  edit?: string;
}

export interface Settings {
  contents: Content[];
  components: any[];
}

export interface Content {
  editable: boolean;
  path: string;
  query: string;
  text: string;
  node: string;
  attr: Attr;
}

export interface Attr7 {
  class: any;
  component?: string;
  "data-type"?: string;
  "data-dashboard"?: string;
  "data-widget"?: string;
  "css-arrow-down"?: string[];
  "css-body"?: string[];
  "css-brand"?: string[];
  "css-change"?: string[];
  "css-count"?: string[];
  "css-down"?: string[];
  "css-up"?: string[];
}

export interface Component {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: ComponentAttr;
}

export interface ComponentAttr {
  "data-type": string;
  "data-widget": string;
  component: string;
  "data-dashboard": string;
  "css-arrow-down": string[];
  "css-body": string[];
  "css-brand": string[];
  "css-change": string[];
  "css-count": string[];
  "css-down": string[];
  "css-up": string[];
  class: string;
}

export interface Zones {
  [x: string]: Zone;
}

export interface Zone {
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

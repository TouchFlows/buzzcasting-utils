export interface Root {
  sections: Sections;
  slide: Slide;
  widgets: Widgets;
  zones: Zones;
  label: string;
}

export interface Sections {
  s5lh7lv: S5lh7lv;
  sirsvcb: Sirsvcb;
  ssjuh8d: Ssjuh8d;
  si8twt6: Si8twt6;
  svmuyb9: Svmuyb9;
  sm66hae: Sm66hae;
}

export interface S5lh7lv {
  area: string;
  "grid-area": string;
  widgets: string[];
}

export interface Sirsvcb {
  area: string;
  "grid-area": string;
  widgets: string[];
}

export interface Ssjuh8d {
  area: string;
  "grid-area": string;
  widgets: string[];
}

export interface Si8twt6 {
  area: string;
  "grid-area": string;
  widgets: string[];
}

export interface Svmuyb9 {
  area: string;
  "grid-area": string;
  widgets: string[];
  interval: string;
  animation: string;
  "animation-speed": string;
}

export interface Sm66hae {
  area: string;
  "grid-area": string;
  widgets: string[];
  interval: string;
  animation: string;
  "animation-speed": string;
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
  w4p5odj: W4p5odj;
  waz8sbl: Waz8sbl;
  ws68sly: Ws68sly;
  wf00e6d: Wf00e6d;
  w15nyls: W15nyls;
  wtv2iph: Wtv2iph;
  womg48z: Womg48z;
  wtxsk0r: Wtxsk0r;
  w8htv58: W8htv58;
}

export interface W4p5odj {
  node: string;
  child: Child[];
  settings: Settings;
  template: string;
  label: string;
}

export interface Child {
  node: string;
  tag: string;
  attr: Attr;
  child: Child2[];
}

export interface Attr {
  class: string;
}

export interface Child2 {
  node: string;
  tag: string;
  attr?: Attr2;
}

export interface Attr2 {
  class: string[];
}

export interface Settings {
  contents: Content[];
  components: any[];
  component: any[];
}

export interface Content {
  editable: boolean;
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: Attr3;
}

export interface Attr3 {
  class: string[];
}

export interface Waz8sbl {
  node: string;
  child: Child3[];
  settings: Settings2;
  template: string;
  label: string;
}

export interface Child3 {
  node: string;
  tag: string;
  child: Child4[];
}

export interface Child4 {
  node: string;
  tag: string;
  attr: Attr4;
  child: Child5[];
}

export interface Attr4 {
  class: string[];
  edit: string;
}

export interface Child5 {
  node: string;
  text: string;
}

export interface Settings2 {
  contents: Content2[];
  components: any[];
  component: any[];
}

export interface Content2 {
  editable: boolean;
  path: string;
  query: string;
  text: string;
  node: string;
  attr: Attr5;
}

export interface Attr5 {
  class: string[];
}

export interface Ws68sly {
  node: string;
  child: Child6[];
  settings: Settings3;
  template: string;
  label: string;
}

export interface Child6 {
  node: string;
  tag: string;
  child: Child7[];
}

export interface Child7 {
  node: string;
  tag: string;
  attr: Attr6;
  child: Child8[];
}

export interface Attr6 {
  class: string[];
  edit: string;
}

export interface Child8 {
  node: string;
  text: string;
}

export interface Settings3 {
  contents: Content3[];
  components: any[];
  component: any[];
}

export interface Content3 {
  editable: boolean;
  path: string;
  query: string;
  text: string;
  node: string;
  attr: Attr7;
}

export interface Attr7 {
  class: string[];
}

export interface Wf00e6d {
  node: string;
  child: Child9[];
  settings: Settings4;
  template: string;
  label: string;
}

export interface Child9 {
  node: string;
  tag: string;
  child: Child10[];
}

export interface Child10 {
  node: string;
  tag: string;
  attr: Attr8;
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

export interface Settings4 {
  contents: any[];
  components: Component[];
  component: Component2;
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

export interface Component2 {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: any[];
}

export interface W15nyls {
  node: string;
  child: Child11[];
  settings: Settings5;
  template: string;
  label: string;
}

export interface Child11 {
  node: string;
  tag: string;
  attr: Attr10;
  child: Child12[];
}

export interface Attr10 {
  class: string[];
}

export interface Child12 {
  node: string;
  tag: string;
  attr: Attr11;
  child: Child13[];
}

export interface Attr11 {
  class: string[];
}

export interface Child13 {
  node: string;
  tag: string;
  attr: Attr12;
  child?: Child14[];
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

export interface Child14 {
  node: string;
  text: string;
}

export interface Settings5 {
  contents: Content4[];
  components: Component3[];
}

export interface Content4 {
  editable: boolean;
  path: string;
  query: string;
  text: string;
  node: string;
  attr: Attr13;
}

export interface Attr13 {
  class: string[];
}

export interface Component3 {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: Attr14;
  label: string;
}

export interface Attr14 {
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

export interface Wtv2iph {
  node: string;
  child: Child15[];
  settings: Settings6;
  template: string;
  label: string;
}

export interface Child15 {
  node: string;
  tag: string;
  attr: Attr15;
  child: Child16[];
}

export interface Attr15 {
  class: string[];
}

export interface Child16 {
  node: string;
  tag: string;
  attr: Attr16;
  child: Child17[];
}

export interface Attr16 {
  class: string[];
}

export interface Child17 {
  node: string;
  tag: string;
  attr: Attr17;
  child: Child18[];
}

export interface Attr17 {
  class: string[];
}

export interface Child18 {
  node: string;
  tag: string;
  attr: Attr18;
  child: Child19[];
}

export interface Attr18 {
  class: string[];
  edit?: string;
}

export interface Child19 {
  node: string;
  text?: string;
  tag?: string;
  attr?: Attr19;
}

export interface Attr19 {
  component?: string;
  "data-type"?: string;
  "data-dashboard"?: string;
  "data-widget"?: string;
  "css-key"?: string[];
  "css-legend"?: string[];
  segments?: string;
  colors?: string;
  "dimensions-width"?: string;
  "dimensions-height"?: string;
  "pie-radius-inner"?: string;
  "pie-radius-outer"?: string;
  "show-percent"?: string;
  class: string[];
  duration?: string;
  "pie-animation-duration"?: string;
  "legend-position"?: string;
  "legend-count-width"?: string;
  "legend-gap-column"?: string;
  "css-label"?: string[];
  "css-row"?: string[];
  "legend-key-width"?: string;
  "legend-label-width"?: string;
  "config-fixed"?: string;
  "css-highlighted"?: string[];
}

export interface Settings6 {
  contents: Content5[];
  components: Component4[];
}

export interface Content5 {
  editable: boolean;
  path: string;
  query: string;
  text: string;
  node: string;
  attr: Attr20;
}

export interface Attr20 {
  class: string[];
}

export interface Component4 {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: Attr21;
  label: string;
}

export interface Attr21 {
  component: string;
  "data-type": string;
  "data-dashboard": string;
  "data-widget": string;
  "css-key": string[];
  "css-legend": string[];
  segments: string;
  colors: string;
  "dimensions-width": string;
  "dimensions-height": string;
  "pie-radius-inner": string;
  "pie-radius-outer": string;
  "show-percent": string;
  class: string[];
  duration: string;
  "pie-animation-duration": string;
  "legend-position": string;
  "legend-count-width": string;
  "legend-gap-column": string;
  "css-label"?: string[];
  "css-row"?: string[];
  "legend-key-width": string;
  "legend-label-width": string;
  "config-fixed": string;
  "css-highlighted"?: string[];
}

export interface Womg48z {
  node: string;
  child: Child20[];
  settings: Settings7;
  template: string;
  label: string;
}

export interface Child20 {
  node: string;
  tag: string;
  attr: Attr22;
  child: Child21[];
}

export interface Attr22 {
  class: string[];
}

export interface Child21 {
  node: string;
  tag: string;
  attr: Attr23;
}

export interface Attr23 {
  class: string[];
  "data-dashboard": string;
  "data-widget": string;
  "data-type": string;
  interval: string;
  "size-multiplier": string;
  width: string;
  height: string;
  "word-padding": string;
  range: string;
  items: string;
  component: string;
  "css-highlighted": string[];
  "css-legend": string[];
  "css-key": string[];
  "dimensions-width": string;
  "dimensions-height": string;
  "words-multiplier": string;
  "words-padding": string;
  "show-hashtags": boolean;
  "show-emojis": boolean;
  "css-host": string[];
  "config-items": string;
  debug: boolean;
}

export interface Settings7 {
  contents: any[];
  components: Component5[];
  component: Component6;
}

export interface Component5 {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: Attr24;
}

export interface Attr24 {
  "data-type": string;
  "data-dashboard": string;
  "data-widget": string;
  "data-moderation": string;
  "data-before": string;
  "data-delay": number;
  component: string;
  "css-highlighted": string[];
  "css-legend": string[];
  "css-key": string[];
  "dimensions-width": string;
  "dimensions-height": string;
  "words-multiplier": string;
  "words-padding": string;
  "show-hashtags": boolean;
  "show-emojis": boolean;
  "css-host": string[];
  "config-items": string;
  debug: boolean;
}

export interface Component6 {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: any[];
}

export interface Wtxsk0r {
  node: string;
  child: Child22[];
  settings: Settings8;
  template: string;
  label: string;
}

export interface Child22 {
  node: string;
  tag: string;
  attr: Attr25;
  child: Child23[];
}

export interface Attr25 {
  class: string;
}

export interface Child23 {
  node: string;
  tag: string;
  attr: Attr26;
}

export interface Attr26 {
  "data-type": string;
  "data-dashboard": string;
  "data-widget": string;
  width: string;
  height: string;
  multiplier: string;
  label: string;
  class: string;
}

export interface Settings8 {
  contents: any[];
  components: Component7[];
  component: Component8;
}

export interface Component7 {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: Attr27;
}

export interface Attr27 {
  "data-type": string;
  "data-dashboard": string;
  "data-widget": string;
  width: string;
  height: string;
  multiplier: string;
  label: string;
  class: string;
}

export interface Component8 {
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: any[];
}

export interface W8htv58 {
  label: string;
  template: string;
  node: string;
  child: Child24[];
  settings: Settings9;
  tag: string;
}

export interface Child24 {
  node: string;
  tag: string;
  attr: Attr28;
  child: Child25[];
}

export interface Attr28 {
  class: string[];
  edit: string;
}

export interface Child25 {
  node: string;
  tag: string;
  attr: Attr29;
}

export interface Attr29 {
  class: string[];
  edit: string;
}

export interface Settings9 {
  contents: Content6[];
  components: any[];
  component: any[];
}

export interface Content6 {
  editable: boolean;
  path: string;
  query: string;
  node: string;
  tag: string;
  attr: Attr30;
}

export interface Attr30 {
  class: string[];
}

export interface Zones {
  zlcdwev: Zlcdwev;
}

export interface Zlcdwev {
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

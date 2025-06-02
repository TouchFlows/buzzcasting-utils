export declare function anonymize(name: string): string;

export declare enum API {
    CLOUD = "cloud",
    DASHBOARD = "dashboard",
    DASHBOARDS = "dashboards",
    IMAGES = "images",
    MESSAGES = "messages",
    PREFERENCE = "preference",
    PREFERENCES = "preferences",
    PRESENTATION = "presentation",
    PRESENTATIONS = "presentations",
    SERIES = "series",
    SLIDE = "slide",
    SLIDES = "slides",
    TOPICS = "topics",
    WIDGET = "widget",
    WIDGETS = "widgets"
}

export declare type ApiData = ISeries & IMessages & ICloud;

export declare interface AreaStyle {
}

export declare function attachedMedia(message: IMessage): IAttachedMedia_2;

declare interface Attr_2 {
    ['x:string']: string | string[];
    class: string | string[];
}
export { Attr_2 as Attr }

export declare function attrs(attributes: NamedNodeMap): any;

export declare const awaitElement: (selector: string) => Promise<unknown>;

export declare function brandLogo(channel: string, size: string): string;

/**
 * Convert string containing hyphens to camelCase
 * @param str
 * @returns string
 */
export declare function camelCase(str: string): string;

export declare function camelCasedProps(attributes: NamedNodeMap): IFilteredAttributes;

/**
 * Convert string containing hyphens to camelCase
 * @param str
 * @returns camilized string
 */
export declare function camelize(str: string): string;

export declare const capitalizeFirstLetter: (prop: string) => string;

/**
 * Clear Container range contents of template code when the web component is connected to the DOM
 * @param myNode
 */
export declare function clearContents(myNode: HTMLElement): void;

export declare interface CloudAttr {
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

export declare interface Component {
    path: string;
    query: string;
    node: string;
    tag: string;
    attr: MessagesAttr;
}

export declare interface Content {
    editable?: boolean;
    path: string;
    query: string;
    text: string;
    node: string;
    attr: MessagesAttr;
}

export declare interface Countries {
    type: string;
    geometries: CountriesGeometry[];
}

export declare interface CountriesGeometry {
    type: Type;
    arcs: Array<Array<number[] | number>>;
    id?: string;
    properties: CountryProperties;
}

export declare interface CountryObjects {
    countries: Countries;
    land: Land;
}

export declare interface CountryProperties {
    name: string;
    code: string;
}

declare enum CSS_2 {
    API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;",
    APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;",
    BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;",
    CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;",
    DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;",
    ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;",
    GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;",
    HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;",
    KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;",
    MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;",
    NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;",
    NONE = "color:transparent;background-color:transparent;",
    OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;",
    PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;",
    SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;",
    SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;",
    STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;",
    SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;",
    WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;",
    WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;"
}
export { CSS_2 as CSS }

export declare function deepMerge(objs: any): void;

declare const escape_2: (htmlStr: string) => string;
export { escape_2 as escape }

export declare enum EVENTS {
    ADD_SLIDE = "addSlide",
    APP_READY = "appReady",
    API_UPDATE = "apiUpdate",
    WS_API_REQUEST = "wsApiRequest",
    WS_API_RESPONSE = "wsApiResponse",
    WS_API_UPDATE = "wsApiRUpdate",
    APPROVE_MESSAGE = "approveMessage",
    CHANNEL = "channel",
    CLEAN_MESSAGES = "cleanMessages",
    CLOSE_BUILDER_DIALOG = "closeBuilderDialog",
    CLOSE_BUILDER_MODAL = "closeBuilderModal",
    CLOSE_MODAL = "closeModal",
    CSS_SET = "setCss",
    CSS_STORE = "storeCss",
    DASHBOARD_LOAD = "loadDashboard",
    DASHBOARD_STORE = "storeDashboard",
    ERROR = "error",
    HIDE_MESSAGE = "hideMessage",
    HIDE_LABELS = "hideLabels",
    IMAGE_GET = "getImage",
    IMAGE_SET = "setImage",
    IMAGE_STORED = "imageStored",
    LAUPPUT_UPDATE = "layoutUpdate",
    PREV_SLIDE = "prevSlide",
    RELOAD_PRESENTATION = "reloadPresentation",
    STAR_MESSAGE = "starMessage",
    GOTO_SLIDE = "gotoSlide",
    NEXT_SLIDE = "nextSlide",
    PREFERENCE_LOAD = "loadPreference",
    PREFERENCE_STORE = "storePreference",
    PAUSE_PRESENTATION = "pausePresentation",
    PRESENTATION_READY = "presentationReady",
    PRESENTATION_LOAD = "loadPresentation",
    PRESENTATION_STORE = "storePresentation",
    SCREENSHOT_TAKE = "takeScreenshot",
    SCREENSHOT_STORE = "storeScreenshot",
    SECTION_UPDATE = "sectionUpdate",
    SHOW_BUILDER_DIALOG = "showBuilderDialog",
    SHOW_BUILDER_MODAL = "showBuilderModal",
    SHOW_MODAL = "showModal",
    SLIDE_DID_LOAD = "slideDidLoad",
    SLIDE_GET = "getSlide",
    SLIDE_GOTO = "slideGoto",
    SLIDE_LOAD = "loadSlide",
    SLIDE_READY = "slideReady",
    SLIDE_SAVED = "slideSaved",
    SLIDE_SET = "setSlide",
    SLIDE_STORE = "storeSlide",
    SLIDE_STORED = "slideStored",
    SLIDE_TRANSITIONER = "slideTransitioner",
    START_TRANSITIONER = "startTransitioner",
    STORAGE_INIT = "storageInit",
    SUBSCRIBE = "subscribe",
    SUSPEND_ACCOUNT = "suspendAccount",
    SWITCH_PRESENTATION = "switchPresentation",
    REMOVE_CLOUD = "removeCloud",
    UPDATE = "update",
    UPLOAD_COMPLETED = "uploadCompleted",
    VERSION = "version",
    WIDGETS_CLEAR = "widgetsClear",
    WIDGET_LOAD = "widgetLoad",
    WIDGET_STORE = "widgetStore",
    WIDGET_UPDATE = "widgetUpdate"
}

export declare function filterAttributes(attributes: NamedNodeMap): IFilteredAttributes;

export declare function formatContent(message: IMessage, titleCss?: string): string;

export declare const getGuid: () => string;

export declare function getKey(query: IQuery): string;

export declare function getParameterByName(key: string): string | null;

export declare const getQueryParam: (param: string) => any;

export declare function hashSum(o: any): string | any[];

export declare const hasHWA: () => boolean;

export declare const html2json: (html: string) => {
    node: string;
    child: never[];
};

export declare const HTMLParser: (html: any, handler: any) => void;

export declare const HTMLtoDOM: (html: string, doc: any) => any;

export declare const HTMLtoXML: (html: string) => string;

export declare interface IAnimation {
    items?: number;
    interval: number;
    animation: number;
    speed?: '' | 'slow' | 'slower' | 'fast' | 'faster';
    delay?: number;
    parentTag?: string;
}

export declare interface IApiResponse {
    data: IDashboard[] | IImage[] | IMessage[] | ISeries | ICloud | ISlide[] | IPresentation[] | IPreference[] | IWidget[] | null;
    message: string;
    success: boolean;
    query?: IQuery;
}

export declare interface IArc {
    strokeStyle: string;
    lineWidth: number;
}

export declare interface IAttachedMedia {
    image?: string;
    background: {
        backgroundimage?: string;
    } | null;
    video?: string;
}

declare interface IAttachedMedia_2 {
    image?: string;
    background: {
        backgroundimage?: string;
    } | null;
    video?: string;
}

export declare interface IBorders {
    strokeStyle: string;
    lineWidth: number;
}

export declare interface IBrand {
    show?: boolean;
    size?: string;
}

export declare interface ICardAttributes {
    'layout'?: 'base' | 'globe' | 'carousel';
    'component': string;
    'data-type': 'messages' | 'cloud' | 'series';
    'data-order'?: string;
    'data-dashboard': string;
    'data-widget': string;
    'css-body'?: string[];
    'css-brand'?: string[];
    'css-card'?: string[];
    'css-date'?: string[];
    'css-handle'?: string[];
    'css-name'?: string[];
    'date-format'?: string;
    'time-format'?: string;
    'show-brand'?: 'true' | 'false';
    'show-kpi'?: 'true' | 'false';
    'show-sender'?: 'true' | 'false';
    'animation'?: string;
    'interval'?: string;
}

export declare interface ICardOptions {
    animation?: IAnimation;
    brand?: IBrand;
    css?: ICss;
    d3?: ID3;
    dateformat?: IDateFormat;
    show?: IShow;
}

export declare interface ICategory {
    type: string;
    data: string[];
}

/**
 * Cloud
 */
export declare interface ICloud {
    labels: ILabel[];
    current: any[];
    previous: any[];
    type: string;
    total: number;
    current_total: number;
    previous_total: number;
}

export declare interface ICloudAnimation {
    interval: number;
    animation: number;
    speed: string;
    parentTag: string;
}

export declare interface ICloudBubbles {
    size: number;
    classlist: string;
    force: number;
    color: string;
}

export declare interface ICloudConfig {
    items?: number;
    chunk?: number;
    fixed?: number;
    abbreviate?: boolean;
}

export declare interface ICloudCss {
    arrowdown?: string;
    arrowup?: string;
    backdrop?: string;
    body?: string;
    brand?: string;
    change?: string;
    chart?: string;
    count?: string;
    container?: string;
    date?: string;
    down?: string;
    host?: string;
    image?: string;
    key?: string;
    legend?: string;
    title?: string;
    up?: string;
    widget?: string;
    dark?: boolean;
}

export declare interface ICloudD3 {
    globe: {
        colors: {
            arc: string;
            border: string;
            country: string;
            land: string;
            sphere: string;
        };
        settings?: {
            canvas?: string;
            card?: string;
            width?: number;
            height?: number;
        };
    };
}

export declare interface ICloudDateFormat {
    time?: string;
    date?: string;
}

export declare interface ICloudDimensions {
    width: number;
    height: number;
}

declare interface ICloudIndicators {
    total: number;
    positive: number;
    negative: number;
    neutral: number;
    engagement: number;
    reach: number;
    velocity: number;
}

export declare interface ICloudInfluencers {
    labels?: Label[];
    title?: string;
    current?: ICloudInfluencersData[];
    previous?: ICloudInfluencersData[];
    type: string;
    total?: number;
    current_total?: number;
    previous_total?: number;
}

export declare interface ICloudInfluencersData {
    color: string;
    label: string;
    avatar: string;
    rank: number;
    authors: string;
    influencers: string;
    total: number;
    positive: number;
    neutral: number;
    negative: number;
    potential_reach: number;
    reach_per_result: number;
    engagement: number;
    engagement_per_result: number;
    profile: string;
    biography: string;
    country: string;
}

export declare interface ICloudKpi {
    name: string;
}

export declare interface ICloudLegend {
    count?: {
        width?: string;
        height?: string;
    };
    key: {
        width: string;
    };
    width: string;
    position: string;
    gap?: {
        column: string;
        row: string;
    };
    show: {
        percentage: boolean;
    };
}

export declare interface ICloudOptions {
    animation?: ICloudAnimation;
    css?: ICloudCss;
    d3?: ICloudD3;
    dateformat?: ICloudDateFormat;
    show?: ICloudShow;
    config?: ICloudConfig;
    colors?: string[];
    dimensions?: ICloudDimensions;
    pie?: ICloudPie;
    kpi?: ICloudKpi;
    legend?: ICloudLegend;
    bubbles?: ICloudBubbles;
}

export declare interface ICloudPie {
    radius: {
        inner: number;
        outer: number;
    };
    animation: {
        duration: number;
    };
}

export declare interface ICloudShow {
    brand?: boolean;
    date?: boolean;
}

export declare interface ICountries {
    type: string;
    objects: CountryObjects;
    arcs: Array<Array<number[]>>;
    bbox: number[];
    transform: Transform;
}

export declare interface ICountry {
    fillStyle: string;
}

export declare interface ICss {
    avatar?: string;
    backdrop?: string;
    body?: string;
    brand?: string;
    card?: string;
    container?: string;
    date?: string;
    dynamics?: string;
    handle?: string;
    host?: string;
    image?: string;
    kpi?: string;
    label?: string;
    name?: string;
    sender?: string;
    title?: string;
    video?: string;
    widget?: string;
    dark?: boolean;
}

export declare interface ID3 {
    globe: {
        colors: {
            arc: string;
            border: string;
            country: string;
            land: string;
            sphere: string;
        };
        settings?: {
            canvas?: string;
            card?: string;
            width?: number;
            height?: number;
        };
    };
}

export declare interface ID3Bubbles {
    size: number;
    force: number;
    classlist?: string;
    color?: string;
}

export declare interface ID3Data {
    label: string;
    count: number;
    color: string;
    radius?: number;
    fill?: string;
}

export declare interface ID3Legend {
    count: {
        width: string;
    };
    key: {
        width: string;
    };
    legend: {
        width: string;
    };
}

export declare interface ID3Map {
    radius: {
        inner: number;
        outer: number;
    };
    animation: {
        duration: number;
    };
}

export declare interface ID3Options {
    colors: string[];
    pie?: ID3Pie;
    map?: ID3Map;
    legend?: ID3Legend;
    bubbles?: ID3Bubbles;
    dimensions?: {
        width: number;
        height: number;
    };
    data: [ID3Data?];
    total?: number;
}

export declare interface ID3Pie {
    radius: {
        inner: number;
        outer: number;
    };
    animation: {
        duration: number;
    };
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

export declare interface IDashboards {
    dashboards: IDashboard[];
}

export declare interface IDateFormat {
    time?: string;
    date?: string;
}

export declare interface IDynamics {
    engagement?: number;
    semrush_visits?: number;
    potential_reach?: number;
    facebook_engagement?: number;
    facebook_insights_reach?: number;
    facebook_insights_impressions?: number;
    facebook_insights_link_clicks?: number;
    facebook_reactions?: number;
    facebook_shares?: number;
    instagram_followers?: number;
    instagram_likes?: number;
    retweets?: number;
    twitter_shares?: number;
    twitter_bookmarks?: number;
    twitter_followers?: number;
    twitter_impressions?: number;
    twitter_insights_retweets?: number;
    twitter_likes?: number;
    twitter_replies?: number;
    twitter_video_views?: number;
    total_comments?: number;
    trending_score?: number;
}

export declare interface IEchartsLine {
    color: string[];
    xAxis: XAxis;
    yAxis: YAxis;
    series: Series[];
}

export declare interface IFilteredAttributes {
    [key: string]: string | object;
}

export declare interface IGeo {
    latitude?: number;
    longitude?: number;
    zip?: string;
    street: string;
    city?: string;
    country: string;
}

export declare interface IImage {
    basename: string;
    name: string;
    extension: "png" | "webp" | "gif" | "jpg" | "jpeg";
    size: number;
    type: "image/png" | "image/webp" | "image/gif" | "image/jpg" | "image/jpeg";
    url: URL;
}

export declare interface IImages {
    images: IImage[];
}

export declare interface IIndicators {
    value: number;
}

export declare interface IJsonWidget {
    node: string;
    child: any[] | JsonChild[];
    settings?: Settings;
    template?: string;
    label?: string;
    tag?: string;
}

export declare interface ILabel {
    label: string;
    count: number;
    info?: string;
    current: ICloudIndicators;
    previous?: ICloudIndicators;
    percentage?: number;
}

export declare interface ILand {
    fillStyle: string;
}

export declare interface ILayout {
    sections: Object | ISlideSections;
    slide: ISlide;
    widgets: Object | ISlideWidgets;
    zones: Object | ISlideZones;
}

export declare interface IMedium {
    type: string;
    url: string;
    width: number;
    height: number;
}

export declare interface IMessage {
    id: string;
    published: string;
    harvested: string;
    utc: number;
    expires: number;
    channel: string;
    type: string;
    sender: ISender;
    reply: string;
    replyto: string;
    page: string;
    conversation: string;
    title: string;
    content: string;
    sentiment: number;
    link: string;
    language?: string;
    region?: string;
    topics: ITopic[];
    dynamics?: IDynamics;
    geo?: IGeo;
    media?: IMedium[];
}

/**
 * Messages
 */
export declare interface IMessages {
    messages: IMessage[];
    presentation?: string;
    slide?: string;
    title?: string;
    dashboard?: string;
    widget?: string;
    topics?: string;
}

export declare interface IMetrics {
    doc?: number;
    previous?: number;
    change?: number;
}

/**
 * IModal
 */
export declare interface IModal {
    showComponent: string;
    props?: any;
    timeout?: number;
}

export declare const intToString: (num: any, digits?: number, abbreviate?: boolean, locale?: string) => string;

export declare interface IPreference {
    id: string;
    value?: string;
    update?: number;
}

export declare interface IPreferences {
    preferences: IPreference[];
}

export declare interface IPresentation {
    id: string;
    name: string;
    link: string;
    delay: number;
    canModerate: boolean;
    period: number;
    slide_interval: number;
    update: number;
}

export declare interface IPresentations {
    presentations: IPresentation[];
}

/**
 * Query
 */
export declare interface IQuery {
    [x: string]: any;
    widget: string;
    topics?: string;
    presentation?: string;
    dashboard?: string;
    labels?: string[];
    compare?: string;
    period?: number;
    type?: "cloud" | "messages" | "series" | "preference" | "proxy" | "slide" | "dashboard" | "widget";
    order?: "utc" | "reach" | "engagement" | "impressions";
    media?: number;
    dynamics?: number;
    geo?: number;
    delay?: string;
    approved?: string;
    moderation?: "realtime" | "delayed" | "approved" | "none";
    hrm?: string;
    before?: number;
    since?: number;
    hash?: string;
    name?: string;
    data?: any;
}

/**
 * API Response
 */
export declare interface IResponse {
    data: IDashboards | IImages | IMessages | ISeries | ICloud | ISlides | IPresentations | IPreferences | IWidgets | null;
    message: string;
    success: boolean;
    query?: IQuery;
}

export declare interface IRotatingGlobe {
    country: ICountry;
    land: ILand;
    borders: IBorders;
    sphere: ISphere;
    arc: IArc;
}

export declare interface ISender {
    id?: string;
    channel?: string;
    title?: string;
    name?: string;
    avatar?: string;
    bio?: string;
    location?: string;
    verified?: number;
    following?: number;
    followers?: number;
    listed?: number;
    favourites?: number;
    messages?: number;
    influence?: number;
}

/**
 * Series Data
 */
export declare interface ISeries {
    topic: string;
    title: string;
    series: ISeriesData[];
    category: ICategory;
    metrics?: IMetrics;
    indicators?: IIndicators;
    timestamp?: number;
}

export declare interface ISeriesConfig {
    fixed?: number;
    abbreviate?: boolean;
    label?: string;
}

export declare interface ISeriesCss {
    arrowdown?: string;
    arrowup?: string;
    backdrop?: string;
    body?: string;
    brand?: string;
    change?: string;
    count?: string;
    container?: string;
    date?: string;
    down?: string;
    host?: string;
    image?: string;
    label?: string;
    title?: string;
    up?: string;
    widget?: string;
    dark?: boolean;
}

export declare interface ISeriesD3 {
    globe: {
        colors: {
            arc: string;
            border: string;
            country: string;
            land: string;
            sphere: string;
        };
        settings?: {
            canvas?: string;
            card?: string;
            width?: number;
            height?: number;
        };
    };
}

export declare interface ISeriesData {
    name?: string;
    label?: string;
    current?: number[];
    current_total?: number;
    previous_total?: number;
    previous?: number[];
    current_category?: number;
    previous_category?: number;
}

export declare interface ISeriesDateFormat {
    time?: string;
    date?: string;
}

export declare interface ISeriesOptions {
    css?: ISeriesCss;
    d3?: ISeriesD3;
    dateformat?: ISeriesDateFormat;
    show?: ISeriesShow;
    config?: ISeriesConfig;
}

export declare interface ISeriesShow {
    brand?: boolean;
    date?: boolean;
}

export declare interface IShow {
    approve?: boolean;
    avatar?: boolean;
    brand?: boolean;
    date?: boolean;
    dynamics?: boolean;
    kpi?: boolean;
    sender?: boolean;
    star?: boolean;
    visible?: boolean;
}

export declare interface ISlide {
    'id': string;
    'label': string;
    'cols': number;
    'rows': number;
    'width': string;
    'height': string;
    'backgrounds': string[];
    'zones': string[];
    'interval': string;
    'animation': string;
    'animation-speed': string;
}

export declare interface ISlideCloud {
    'data-type'?: string;
    'component'?: string;
    'data-dashboard'?: string;
    'data-widget': string;
    'css-count'?: string[];
    'css-host'?: string;
    'kpi-name'?: string;
    'config-abbreviate'?: string;
    'class'?: string | string[];
}

export declare interface ISlideComponent {
    path: string;
    query: string;
    node: string;
    tag: string;
    attr: ISlideMessages | ISlideSeries | ISlideCloud;
}

export declare interface ISlideContent {
    editable: boolean;
    path: string;
    query: string;
    node: string;
    tag: string;
    attr: Attr_2;
}

export declare interface ISlideMessages {
    'layout'?: string;
    'component'?: string;
    'data-type'?: string;
    'data-dashboard'?: string;
    'data-widget'?: string;
    'show-kpi'?: string;
    'show-sender'?: string;
    'css-date'?: string[];
    'css-card'?: string[];
    'css-body'?: string[];
    'css-brand'?: string[];
    'css-handle'?: string[];
    'css-name'?: string[];
    'date-format'?: string;
    'animation'?: string;
    'interval'?: string;
    'show-brand'?: string;
    'data-order'?: string;
    'index'?: string;
    'class'?: string | string[];
    'edit'?: string;
}

export declare interface ISlides {
    presentation: string;
    slides: any;
}

export declare interface ISlideSection {
    'area': string;
    'grid-area': string;
    'widgets': string[];
}

export declare interface ISlideSections {
    ['x:string']: ISlideSection;
}

export declare interface ISlideSeries {
    'data-type'?: string;
    'data-widget': string;
    'component'?: string;
    'data-dashboard'?: string;
    'css-arrow-down'?: string | string[];
    'css-body'?: string | string[];
    'css-brand'?: string | string[];
    'css-change'?: string | string[];
    'css-count'?: string | string[];
    'css-down'?: string | string[];
    'css-up'?: string | string[];
    'class'?: string | string[];
}

export declare interface ISlideSettings {
    contents: ISlideContent[];
    component: ISlideComponent;
}

export declare interface ISlideWidget {
    node: string;
    child: SlideChild[];
    settings: ISlideSettings;
    template: string;
    label: string;
    tag: string;
}

export declare interface ISlideWidgets {
    ['x:string']: string;
}

export declare interface ISlideZone {
    'label': string;
    'area': string;
    'grid-area': string;
    'grid-rows': string;
    'grid-cols': string;
    'gap-x': string;
    'gap-y': string;
    'padding': string;
    'sections': string[];
}

export declare interface ISlideZones {
    ['x:string']: ISlideZone[];
}

export declare interface ISphere {
    strokeStyle: string;
    lineWidth: number;
    fillStyle: string;
}

/**
 * Storage Options
 */
export declare interface IStorageOptions {
    app: string;
    builder?: boolean;
    domain?: string;
    cdn?: string;
    channel?: string;
    presentation: string;
    slide?: string;
    slides?: string[];
    display?: string;
    monitor?: string;
    version: string;
    storage: string;
    token?: string;
    bearer?: string;
    csrf?: string;
    moderation?: string;
    nonce?: string;
    beforeTime?: string;
    delay?: number;
    period?: number;
    retention?: number;
    suspended?: boolean;
    loglevel?: number;
}

export declare interface ITopic {
    message_id: string;
    dashboard_id?: string;
    widget_id?: string;
    topic?: string;
    engagement: number;
    impressions: number;
    reach: number;
    sentiment: number;
    title?: string;
    utc?: number;
    expires?: number;
    visible?: number;
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

export declare interface IWidgetComponent {
    path: string;
    query: string;
    node: string;
    tag: string;
    attr: ICardAttributes;
}

export declare interface IWidgetContent {
    editable: boolean;
    path: string;
    query: string;
    text: string;
    node: string;
}

export declare interface IWidgets {
    widgets: IWidget[];
}

export declare interface IWidgetSettings {
    label: string;
    preview?: string;
    contents?: IWidgetContent[];
    component: IWidgetComponent;
}

export declare const json2html: (json: any) => any;

export declare interface JsonChild {
    node: string;
    tag: string;
    attr: MessagesAttr | SeriesAttr;
    child: JsonChild[];
}

export declare interface Label {
    label: string;
    count: number;
    info: string;
}

export declare interface Land {
    type: string;
    geometries: LandGeometry[];
}

export declare interface LandGeometry {
    type: Type;
    arcs: Array<Array<number[]>>;
}

export declare const log: (level: number | undefined, message: any[]) => void;

export declare const maxifyCss: (css: string) => string;

export declare const maxifyHtml: (html: string) => string;

export declare interface MessagesAttr {
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

export declare const minifyCss: (css: string) => string;

export declare const minifyHtml: (html: string) => string;

export declare enum MODERATION {
    APPROVED = "approved",
    BEFORE = "before",
    DELAYED = "delayed",
    NONE = "none",
    REALTIME = "realtime"
}

export declare function moderation(options: IStorageOptions, query: IQuery): IQuery;

export declare function numberFormatter(num: number, digits: number): string;

export declare const randomColor: () => string;

export declare const randomRGB: () => string;

export declare const randomRGBA: () => string;

export declare const randomRGBAfull: () => string;

/**
 * Get a random item from an array
 * @param array
 * @returns
 */
export declare function randomValue(array: string | any[]): number;

export declare const RGBAchangeA: (str: string, opacity: string) => string;

export declare function rtl(message: IMessage): {
    [key: string]: string;
};

export declare function sanitize(messages: IMessage[]): IMessage[];

export declare interface Series {
    data: number[];
    type: string;
    areaStyle: AreaStyle;
}

export declare interface SeriesAttr {
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

export declare interface Settings {
    contents: Content[];
    component: Component;
}

export declare enum ShapeType {
    MultiPolygon = "MultiPolygon",
    Polygon = "Polygon"
}

export declare function showModal(e: MouseEvent, widget: any, message: IMessage, options: any): void;

export declare function shuffleMessages(messages: IMessage[]): IMessage[];

export declare interface SlideChild {
    node: string;
    tag: string;
    attr: Attr_2;
}

export declare enum STORAGE {
    KEYVAL = "keyval",
    LOCAL = "local",
    SESSION = "session",
    DEXIE = "dexie",
    WINDOW = "window"
}

/**
 * Generate a unique identifier
 * @returns uid
 */
export declare function stringGen(): string;

export declare interface Transform {
    scale: number[];
    translate: number[];
}

export declare enum Type {
    MultiPolygon = "MultiPolygon",
    Polygon = "Polygon"
}

export declare const typeCss: (query: IQuery | undefined) => string;

export declare const uniq: (length?: number, existing?: never[]) => string;

export declare const upDownColor: (change: number) => "text-down text-xs" | "text-up text-xs" | "text-white text-xs";

export declare function widgetParams(query: IQuery): IQuery;

export declare const wrapPromise: (promise: any, delay: number, reason: string) => Promise<any>;

export declare interface XAxis {
    type: string;
    boundaryGap: boolean;
    data: string[];
}

export declare interface YAxis {
    type: string;
}

export { }

export declare function anonymize(name: string): string;

export declare enum API {
    MESSAGES = "messages",
    CLOUD = "cloud",
    SERIES = "series",
    TOPICS = "topics",
    WIDGET = "widget",
    WIDGETS = "widgets",
    DASHBOARD = "dashboard",
    DASHBOARDS = "dashboards",
    SLIDE = "slide",
    SLIDES = "slides",
    PRESENTATION = "presentation",
    PRESENTATIONS = "presentations",
    PREFERENCE = "preference",
    PREFERENCES = "preferences"
}

export declare type ApiData = ISeries & IMessages & ICloud;

export declare function attachedMedia(message: IMessage): IAttachedMedia_2;

export declare function attrs(attributes: NamedNodeMap): any;

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
    CLOSE_MODAL = "closeModal",
    CLOSE_BUILDER_MODAL = "closeBuilderModal",
    DASHBOARD_LOAD = "loadDashboard",
    DASHBOARD_STORE = "storeDashboard",
    ERROR = "error",
    HIDE_MESSAGE = "hideMessage",
    HIDE_LABELS = "hideLabels",
    MAUPPUT_UPDATE = "layoutUpdate",
    PREV_SLIDE = "prevSlide",
    RELOAD_PRESENTATION = "reloadPresentation",
    SHOW_MODAL = "showModal",
    STAR_MESSAGE = "starMessage",
    GOTO_SLIDE = "gotoSlide",
    NEXT_SLIDE = "nextSlide",
    PREFERENCE_LOAD = "loadPreference",
    PREFERENCE_STORE = "storePreference",
    PAUSE_PRESENTATION = "pausePresentation",
    PRESENTATION_READY = "presentationReady",
    PRESENTATION_LOAD = "loadPresentation",
    PRESENTATION_STORE = "storePresentation",
    SHOW_BUILDER_MODAL = "showBuilderModal",
    SLIDE_DID_LOAD = "slideDidLoad",
    SLIDE_GOTO = "slideGoto",
    SLIDE_READY = "slideReady",
    SLIDE_LOAD = "loadSlide",
    SLIDE_STORE = "storeSlide",
    SLIDE_TRANSITIONER = "slideTransitioner",
    START_TRANSITIONER = "startTransitioner",
    STORAGE_INIT = "storageInit",
    SUBSCRIBE = "subscribe",
    SUSPEND_ACCOUNT = "suspendAccount",
    SWITCH_PRESENTATION = "switchPresentation",
    REMOVE_CLOUD = "removeCloud",
    UPDATE = "update",
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

export declare const html2json: (html: string) => {
    node: string;
    child: never[];
};

export declare const HTMLParser: (html: any, handler: any) => void;

export declare const HTMLtoDOM: (html: string, doc: any) => any;

export declare const HTMLtoXML: (html: string) => string;

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

declare interface ICloudIndicators {
    total: number;
    positive: number;
    negative: number;
    neutral: number;
    engagement: number;
    reach: number;
    velocity: number;
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

export declare interface IIndicators {
    value: number;
}

export declare interface ILabel {
    label: string;
    count: number;
    info?: string;
    current: ICloudIndicators;
    previous?: ICloudIndicators;
    percentage?: number;
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
    topics?: string;
    presentation?: string;
    dashboard: string;
    widget: string;
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
    data: IDashboards | IMessages | ISeries | ICloud | ISlides | IPresentations | IPreferences | IWidgets | null;
    message: string;
    success: boolean;
    query?: IQuery;
}

/**
 * Messages
 */
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

export declare interface ISlides {
    presentation: string;
    slides: any;
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

export declare interface IWidgets {
    widgets: IWidget[];
}

export declare const json2html: (json: any) => any;

export declare const log: (level: number | undefined, message: any[]) => void;

export declare const maxifyCss: (css: string) => string;

export declare const maxifyHtml: (html: string) => string;

export declare const minifyCss: (css: string) => void;

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

/**
 * Get a random item from an array
 * @param array
 * @returns
 */
export declare function randomValue(array: string | any[]): number;

export declare function rtl(message: IMessage): {
    [key: string]: string;
};

export declare function sanitize(messages: IMessage[]): IMessage[];

export declare function shuffleMessages(messages: IMessage[]): IMessage[];

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

export declare const typeCss: (query: IQuery | undefined) => string;

export declare const uniq: (length?: number, existing?: never[]) => string;

export declare const upDownColor: (change: number) => "text-down text-xs" | "text-up text-xs" | "text-white text-xs";

export declare function widgetParams(query: IQuery): IQuery;

export declare const wrapPromise: (promise: any, delay: number, reason: string) => Promise<any>;

export { }

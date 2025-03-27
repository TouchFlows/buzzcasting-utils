import { Countries } from './interfaces';
import { CountriesGeometry } from './interfaces';
import { IAnimation } from './interfaces';
import { IArc } from './interfaces';
import { IAttachedMedia } from './interfaces';
import { IBorders } from './interfaces';
import { IBrand } from './interfaces';
import { ICardOptions } from './interfaces';
import { ICloud } from './interfaces';
import { ICloudBubbles } from './interfaces';
import { ICloudConfig } from './interfaces';
import { ICloudCss } from './interfaces';
import { ICloudD3 } from './interfaces';
import { ICloudDateFormat } from './interfaces';
import { ICloudDimensions } from './interfaces';
import { ICloudInfluencers } from './interfaces';
import { ICloudInfluencersData } from './interfaces';
import { ICloudKpi } from './interfaces';
import { ICloudLegend } from './interfaces';
import { ICloudOptions } from './interfaces';
import { ICloudPie } from './interfaces';
import { ICloudShow } from './interfaces';
import { ICountries } from './interfaces';
import { ICountry } from './interfaces';
import { ICss } from './interfaces';
import { ID3 } from './interfaces';
import { ID3Bubbles } from './interfaces';
import { ID3Data } from './interfaces';
import { ID3Legend } from './interfaces';
import { ID3Map } from './interfaces';
import { ID3Options } from './interfaces';
import { ID3Pie } from './interfaces';
import { IDateFormat } from './interfaces';
import { IDynamics } from './interfaces';
import { IEchartsLine } from './interfaces';
import { ILabel } from './interfaces';
import { ILand } from './interfaces';
import { IMessage } from './interfaces';
import { IMessages } from './interfaces';
import { IModal } from './interfaces';
import { IQuery } from './interfaces';
import { IQuery as IQuery_2 } from '../interfaces';
import { IResponse } from './interfaces';
import { IRotatingGlobe } from './interfaces';
import { ISeries } from './interfaces';
import { ISeriesConfig } from './interfaces';
import { ISeriesCss } from './interfaces';
import { ISeriesD3 } from './interfaces';
import { ISeriesData } from './interfaces';
import { ISeriesDateFormat } from './interfaces';
import { ISeriesOptions } from './interfaces';
import { ISeriesShow } from './interfaces';
import { IShow } from './interfaces';
import { ISphere } from './interfaces';
import { IStorageOptions } from './interfaces';
import { IStorageOptions as IStorageOptions_2 } from '../interfaces';
import { Label } from './interfaces';
import { Land } from './interfaces';
import { LandGeometry } from './interfaces';
import { Transform } from './interfaces';

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

export { Countries }

export { CountriesGeometry }

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

export declare function getKey(query: IQuery_2): string;

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

export { IAnimation }

export { IArc }

export { IAttachedMedia }

declare interface IAttachedMedia_2 {
    image?: string;
    background: {
        backgroundimage?: string;
    } | null;
    video?: string;
}

export { IBorders }

export { IBrand }

export { ICardOptions }

export { ICloud }

export { ICloudBubbles }

export { ICloudConfig }

export { ICloudCss }

export { ICloudD3 }

export { ICloudDateFormat }

export { ICloudDimensions }

export { ICloudInfluencers }

export { ICloudInfluencersData }

export { ICloudKpi }

export { ICloudLegend }

export { ICloudOptions }

export { ICloudPie }

export { ICloudShow }

export { ICountries }

export { ICountry }

export { ICss }

export { ID3 }

export { ID3Bubbles }

export { ID3Data }

export { ID3Legend }

export { ID3Map }

export { ID3Options }

export { ID3Pie }

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

export { IDateFormat }

export { IDynamics }

export { IEchartsLine }

export declare interface IFilteredAttributes {
    [key: string]: string | object;
}

export { ILabel }

export { ILand }

export { IMessage }

export { IMessages }

export { IModal }

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

export { IQuery }

export { IResponse }

export { IRotatingGlobe }

export { ISeries }

export { ISeriesConfig }

export { ISeriesCss }

export { ISeriesD3 }

export { ISeriesData }

export { ISeriesDateFormat }

export { ISeriesOptions }

export { ISeriesShow }

export { IShow }

export declare interface ISlides {
    presentation: string;
    slides: any;
}

export { ISphere }

export { IStorageOptions }

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

export { Label }

export { Land }

export { LandGeometry }

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

export declare function moderation(options: IStorageOptions_2, query: IQuery_2): IQuery_2;

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

export declare enum ShapeType {
    MultiPolygon = "MultiPolygon",
    Polygon = "Polygon"
}

export declare function showModal(e: MouseEvent, widget: any, message: IMessage, options: any): void;

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

export { Transform }

export declare const typeCss: (query: IQuery_2 | undefined) => string;

export declare const uniq: (length?: number, existing?: never[]) => string;

export declare const upDownColor: (change: number) => "text-down text-xs" | "text-up text-xs" | "text-white text-xs";

export declare function widgetParams(query: IQuery_2): IQuery_2;

export declare const wrapPromise: (promise: any, delay: number, reason: string) => Promise<any>;

export { }

/**
 * Constants
 */
import { API, CSS, EVENTS, MODERATION, STORAGE } from "./constants";
import { BuzzcastingStorageManager } from "./manager";
import { BuzzcastingStorageReader } from "./reader";

import {
	anonymize,
	attachedMedia,
	attrs,
	brandLogo,
	camelCase,
	camelize,
	capitalizeFirstLetter,
	clearContents,
	deepMerge,
	filterAttributes,
	formatContent,
	hashSum,
	intToString,
	numberFormatter,
	randomValue,
	rtl,
	sanitize,
	showModal,
	shuffleMessages,
	stringGen,
	upDownColor,
	widgetParams,
} from "./utils";
import Widget from "./widget";

/**
 * IModal
 */
export declare interface IModal {
	showComponent: string;
	props?: any;
	timeout?: number;
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

export declare interface ILabel {
	label: string;
	count: number;
	info?: string;
	current: ICloudIndicators;
	previous?: ICloudIndicators;
	percentage?: number;
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

export declare interface IDashboards {
	dashboards: IDashboard[];
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

export declare interface IGeo {
	latitude?: number;
	longitude?: number;
	zip?: string;
	street: string;
	city?: string;
	country: string;
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

export declare interface IPreference {
	id: string;
	value?: string;
	update?: number;
}

export declare interface IPresentations {
	presentations: IPresentation[];
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

export declare interface IWidgets {
	widgets: IWidget[];
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

/**
 * API Response
 */
export declare interface IResponse {
	data:
		| IDashboards
		| IMessages
		| ISeries
		| ICloud
		| ISlides
		| IPresentations
		| IPreferences
		| IWidgets
		| null;
	message: string;
	success: boolean;
	query?: IQuery;
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

export declare interface ISlides {
	presentation: string;
	slides: any;
}

export declare interface IPreferences {
	preferences: IPreference[];
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
	type?:
		| "cloud"
		| "messages"
		| "series"
		| "preference"
		| "proxy"
		| "slide"
		| "dashboard"
		| "widget";
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

export declare interface ICategory {
	type: string;
	data: string[];
}

export declare interface IMetrics {
	doc?: number;
	previous?: number;
	change?: number;
}

export declare interface IIndicators {
	value: number;
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

declare global {
	interface Window {
		BuzzCasting: any;
	}
}

export type ApiData = ISeries & IMessages & ICloud;

export {
	anonymize,
	API,
	attachedMedia,
	attrs,
	brandLogo,
	BuzzcastingStorageManager,
	BuzzcastingStorageReader,
	camelCase,
	camelize,
	capitalizeFirstLetter,
	clearContents,
	CSS,
	deepMerge,
	EVENTS,
	filterAttributes,
	formatContent,
	hashSum,
	intToString,
	MODERATION,
	numberFormatter,
	randomValue,
	rtl,
	sanitize,
	showModal,
	shuffleMessages,
	stringGen,
	STORAGE,
	upDownColor,
	Widget,
	widgetParams,
};

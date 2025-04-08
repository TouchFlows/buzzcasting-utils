export interface ILayout {
	sections: Object | ISlideSections
	slide: ISlide
	widgets: Object | ISlideWidgets
	zones: Object | ISlideZones
}

export interface ISlideSections {
	['x:string']: ISlideSection
}

export interface ISlideSection {
	'area': string
	'grid-area': string
	'widgets': string[]
}

export interface ISlide {
	'id': string
	'label': string
	'cols': number
	'rows': number
	'width': string
	'height': string
	'backgrounds': string[]
	'zones': string[]
	'interval': string
	'animation': string
	'animation-speed': string
}

export interface ISlideWidgets {
	['x:string']: string
}

export interface ISlideWidget {
	node: string
	child: SlideChild[]
	settings: ISlideSettings
	template: string
	label: string
	tag: string
}

export interface SlideChild {
	node: string
	tag: string
	attr: Attr
}

export interface Attr {
	['x:string']: string | string[]
	class: string | string[]
}

export interface ISlideSettings {
	contents: ISlideContent[]
	component: ISlideComponent
}

export interface ISlideContent {
	editable: boolean
	path: string
	query: string
	node: string
	tag: string
	attr: Attr
}

export interface ISlideComponent {
	path: string
	query: string
	node: string
	tag: string
	attr: ISlideMessages | ISlideSeries | ISlideCloud
}

export interface ISlideMessages {
	'layout'?: string
	'component'?: string
	'data-type'?: string
	'data-dashboard'?: string
	'data-widget'?: string
	'show-kpi'?: string
	'show-sender'?: string
	'css-date'?: string[]
	'css-card'?: string[]
	'css-body'?: string[]
	'css-brand'?: string[]
	'css-handle'?: string[]
	'css-name'?: string[]
	'date-format'?: string
	'animation'?: string
	'interval'?: string
	'show-brand'?: string
	'data-order'?: string
	'index'?: string
	'class'?: string | string[]
	'edit'?: string
}

export interface ISlideSeries {
	'data-type'?: string
	'data-widget': string
	'component'?: string
	'data-dashboard'?: string
	'css-arrow-down'?: string | string[]
	'css-body'?: string | string[]
	'css-brand'?: string | string[]
	'css-change'?: string | string[]
	'css-count'?: string | string[]
	'css-down'?: string | string[]
	'css-up'?: string | string[]
	'class'?: string | string[]
}

export interface ISlideCloud {
	'data-type'?: string
	'component'?: string
	'data-dashboard'?: string
	'data-widget': string
	'css-count'?: string[]
	'css-host'?: string
	'kpi-name'?: string
	'config-abbreviate'?: string
	'class'?: string | string[]
}

export interface ISlideZones {
	['x:string']: ISlideZone[]
}

export interface ISlideZone {
	'label': string
	'area': string
	'grid-area': string
	'grid-rows': string
	'grid-cols': string
	'gap-x': string
	'gap-y': string
	'padding': string
	'sections': string[]
}

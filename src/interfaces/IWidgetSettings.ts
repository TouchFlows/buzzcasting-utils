export interface IWidgetSettings {
	label: string
	preview?: string
	contents?: IWidgetContent[]
	component: IWidgetComponent
}

export interface IWidgetContent {
	editable: boolean
	path: string
	query: string
	text: string
	node: string
}

export interface IWidgetComponent {
	path: string
	query: string
	node: string
	tag: string
	attr: ICardAttributes
}

export interface ICardAttributes {
	'layout'?: 'base' | 'globe' | 'carousel'
	'component': string
	'data-type': 'messages' | 'cloud' | 'series'
	'data-order'?: string
	'data-dashboard': string
	'data-widget': string
	'css-body'?: string[]
	'css-brand'?: string[]
	'css-card'?: string[]
	'css-date'?: string[]
	'css-handle'?: string[]
	'css-name'?: string[]
	'date-format'?: string
	'time-format'?: string
	'show-brand'?: 'true' | 'false'
	'show-kpi'?: 'true' | 'false'
	'show-sender'?: 'true' | 'false'
	'animation'?: string
	'interval'?: string
}

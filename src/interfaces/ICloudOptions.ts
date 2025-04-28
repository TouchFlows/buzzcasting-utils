export interface ICloudOptions {
	css?: ICloudCss
	d3?: ICloudD3
	dateformat?: ICloudDateFormat
	show?: ICloudShow
	config?: ICloudConfig
	colors?: string[]
	dimensions?: ICloudDimensions
	pie?: ICloudPie
	kpi?: ICloudKpi
	legend?: ICloudLegend
  bubbles?: ICloudBubbles
}

export interface ICloudDimensions {
	width: number
	height: number
}

export interface ICloudPie {
	radius: {
		inner: number
		outer: number
	}
	animation: {
		duration: number
	}
}

export interface ICloudLegend {
	count?: {
		width?: string
		height?: string
	}
	key: {
		width: string
	}
	width: string
  position: string
	gap?: {
		column: string
		row: string
	}
  show: { percentage: boolean}
}

export interface ICloudBubbles {
    size: number
    classlist: string
    force: number
    color: string
}

export interface ICloudKpi {
	name: string
}

export interface ICloudCss {
	arrowdown?: string
	arrowup?: string
	backdrop?: string
	body?: string
	brand?: string
	change?: string
  chart?: string
	count?: string
	container?: string
	date?: string
	down?: string
	host?: string
	image?: string
  key?: string 
  legend?: string
	title?: string
	up?: string
	widget?: string
	dark?: boolean
}

export interface ICloudDateFormat {
	time?: string
	date?: string
}

export interface ICloudShow {
	brand?: boolean
	date?: boolean
}

export interface ICloudD3 {
	globe: {
		colors: {
			arc: string
			border: string
			country: string
			land: string
			sphere: string
		}
		settings?: {
			canvas?: string
			card?: string
			width?: number
			height?: number
		}
	}
}

export interface ICloudConfig {
	items?: number
	chunck?: number
	fixed?: number
	abbreviate?: boolean
}

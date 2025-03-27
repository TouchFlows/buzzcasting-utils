export interface IEchartsLine {
	color: string[]
	xAxis: XAxis
	yAxis: YAxis
	series: Series[]
}

export interface Series {
	data: number[]
	type: string
	areaStyle: AreaStyle
}

export interface AreaStyle {}

export interface XAxis {
	type: string
	boundaryGap: boolean
	data: string[]
}

export interface YAxis {
	type: string
}

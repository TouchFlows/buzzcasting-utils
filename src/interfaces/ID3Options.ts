export interface ID3Bubbles {
	size: number
	force: number
	classlist?: string
	color?: string
}

export interface ID3Data {
	label: string
	count: number
	color: string
	radius?: number
	fill?: string
}

export interface ID3Legend {
	count: { width: string }
	key: { width: string }
	legend: { width: string }
}

export interface ID3Pie {
	radius: {
		inner: number
		outer: number
	}
	animation: { duration: number }
}

export interface ID3Map {
	radius: {
		inner: number
		outer: number
	}
	animation: { duration: number }
}

export interface ID3Options {
	colors: string[]
	pie?: ID3Pie
	map?:ID3Map
	legend?: ID3Legend
	bubbles?: ID3Bubbles
	dimensions?: {
		width: number
		height: number
	}
	data: [ID3Data?]
	total?: number
}

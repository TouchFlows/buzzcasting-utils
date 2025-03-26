export interface ICloudInfluencers {
	labels?: Label[]
	title?: string
	current?: ICloudInfluencersData[]
	previous?: ICloudInfluencersData[]
	type: string
	total?: number
	current_total?: number
	previous_total?: number
}

export interface Label {
	label: string
	count: number
	info: string
}

export interface ICloudInfluencersData {
	color: string
	label: string
	avatar: string
	rank: number
	authors: string
	influencers: string
	total: number
	positive: number
	neutral: number
	negative: number
	potential_reach: number
	reach_per_result: number
	engagement: number
	engagement_per_result: number
	profile: string
	biography: string
	country: string
}

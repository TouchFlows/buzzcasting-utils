export interface ICountries {
	type: string
	objects: CountryObjects
	arcs: Array<Array<number[]>>
	bbox: number[]
	transform: Transform
}

export interface CountryObjects {
	countries: Countries
	land: Land
}

export interface Countries {
	type: string
	geometries: CountriesGeometry[]
}

export interface CountriesGeometry {
	type: Type
	arcs: Array<Array<number[] | number>>
	id?: string
	properties: CountryProperties
}

export interface CountryProperties {
	name: string
	code: string
}

export enum Type {
	MultiPolygon = 'MultiPolygon',
	Polygon = 'Polygon',
}

export interface Land {
	type: string
	geometries: LandGeometry[]
}

export interface LandGeometry {
	type: Type
	arcs: Array<Array<number[]>>
}

export interface Transform {
	scale: number[]
	translate: number[]
}

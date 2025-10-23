export interface ICountries {
  type: string;
  objects: CountryObjects;
  arcs: Array<Array<number[]>>;
  bbox: number[];
  transform: Transform;
}

export interface CountryObjects {
  countries: GeoCountries;
  land: GeoLand;
}

export interface GeoCountries {
  type: string;
  geometries: CountriesGeometry[];
}

export interface CountriesGeometry {
  type: GeoType;
  arcs: Array<Array<number[] | number>>;
  id?: string;
  properties: CountryProperties;
}

export interface CountryProperties {
  name: string;
  code: string;
}

export enum GeoType {
  MultiPolygon = "MultiPolygon",
  Polygon = "Polygon",
}

export interface GeoLand {
  type: string;
  geometries: LandGeometry[];
}

export interface LandGeometry {
  type: GeoType;
  arcs: Array<Array<number[]>>;
}

export interface Transform {
  scale: number[];
  translate: number[];
}

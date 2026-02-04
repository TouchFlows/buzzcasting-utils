export interface IMap {
  border: IMapBorder;
  land: IMapLand;
}

export interface IMapBorder {
  stroke: number;
  line: string;
}

export interface IMapLand {
  fill: string;
}

export interface IMapHighlight {
  label: string;
  color: string;
}

export interface IGlobe {
  width?: number;
  height?: number;
  arc?: IGlobeArc;
  border?: IGlobeBorder;
  country?: IGlobeCountry;
  land?: IGlobeLand;
  sphere?: IGlobeSphere;
}

export interface IGlobeArc {
  stroke: string;
  line: number;
}

export interface IGlobeBorder {
  stroke: string;
  line: number;
}

export interface IGlobeCountry {
  fill: string;
}

export interface IGlobeLand {
  fill: string;
}

export interface IGlobeSphere {
  stroke: string;
  line: number;
  fill: string;
}

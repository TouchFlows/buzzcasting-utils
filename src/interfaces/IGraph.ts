export interface IGraph {
  topic?: string;
  title?: string;
  timestamp?: number;
  items: IGraphItem[];
}

export interface IGraphItem {
  name?: string;
  label?: string;
  color?: string;
  points: IGraphPoint[];
}

export interface IGraphPoint {
  x?: number | string;
  y: number;
  label?: string;
}

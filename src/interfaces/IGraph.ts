export interface IGraph {
  graph: {
    type: string;
    smooth: boolean;
    area: {
      fill: string;
      colors: string[];
      opacity: number;
    };
    line: {
      color: string;
      width: number;
    };
    mark: {
      show: boolean;
      symbol: string;
    };
    split: {
      line: string;
      x: boolean;
      y: boolean;
    };
  };
}

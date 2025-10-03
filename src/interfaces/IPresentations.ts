export declare interface IPresentations {
  presentations: IPresentation[];
}

export interface IPresentation {
  id: string;
  name: string;
  link: string;
  delay: number;
  canModerate: boolean;
  period: number;
  slide_interval: number;
  update: number;
}

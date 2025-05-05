/**
 * Query
 */
export declare interface IQuery {
  [x: string]: any;
  widget: string;
  topics?: string;
  presentation?: string;
  dashboard?: string;  
  labels?: string[];
  compare?: string;
  period?: number;
  type?:
    | "cloud"
    | "messages"
    | "series"
    | "preference"
    | "proxy"
    | "slide"
    | "dashboard"
    | "widget";
  order?: "utc" | "reach" | "engagement" | "impressions";
  media?: number;
  dynamics?: number;
  geo?: number;
  delay?: string;
  approved?: string;
  moderation?: "realtime" | "delayed" | "approved" | "none";
  hrm?: string;
  before?: number;
  since?: number;
  hash?: string;
  name?: string;
  data?: any;
}
/**
 * Query
 */
export declare interface IQuery {
  [x: string]: any;
  topics?: string;
  presentation?: string;
  dashboard: string;
  widget: string;
  labels?: string[];
  compare?: string;
  period?: string;
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
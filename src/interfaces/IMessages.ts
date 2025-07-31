import { IDynamics } from "./IDynamics";

/**
 * Messages
 */
export declare interface IMessages {
  messages: IMessage[];
  presentation?: string;
  slide?: string;
  title?: string;
  dashboard?: string;
  widget?: string;
  topics?: string;
}

export declare interface IMessage {
  id: string;
  published: string;
  harvested: string;
  utc: number;
  timestamp?: number;
  expires: number;
  channel: string;
  type: string;
  sender: ISender;
  reply: string;
  replyto: string;
  page: string;
  conversation: string;
  title: string;
  content: string;
  sentiment: number;
  link: string;
  language?: string;
  region?: string;
  topics: ITopic[];
  dynamics?: IDynamics;
  geo?: IGeo;
  media?: IMedium[];
}

export declare interface ISender {
  id?: string;
  channel?: string;
  title?: string;
  name?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  verified?: number;
  following?: number;
  followers?: number;
  listed?: number;
  favourites?: number;
  messages?: number;
  influence?: number;
}

export declare interface ITopic {
  message_id: string;
  dashboard_id?: string;
  widget_id?: string;
  topic?: string;
  engagement: number;
  impressions: number;
  reach: number;
  sentiment: number;
  title?: string;
  utc?: number;
  expires?: number;
  visible?: number;
  approved?: number;
}

export declare interface IGeo {
  latitude?: number;
  longitude?: number;
  zip?: string;
  street: string;
  city?: string;
  country: string;
}

export declare interface IMedium {
  type: string;
  url: string;
  width: number;
  height: number;
}

export declare interface IAttachedMedia {
  image?: string;
  background: { backgroundimage?: string } | null;
  video?: string;
}

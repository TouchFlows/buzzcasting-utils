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
}



export declare interface IDynamics {
  engagement?: number;
  semrush_visits?: number;
  potential_reach?: number;
  facebook_engagement?: number;
  facebook_insights_reach?: number;
  facebook_insights_impressions?: number;
  facebook_insights_link_clicks?: number;
  facebook_reactions?: number;
  facebook_shares?: number;
  instagram_followers?: number;
  instagram_likes?: number;
  retweets?: number;
  twitter_shares?: number;
  twitter_bookmarks?: number;
  twitter_followers?: number;
  twitter_impressions?: number;
  twitter_insights_retweets?: number;
  twitter_likes?: number;
  twitter_replies?: number;
  twitter_video_views?: number;
  total_comments?: number;
  trending_score?: number;
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
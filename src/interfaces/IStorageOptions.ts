/**
 * Storage Options
 */
export declare interface IStorageOptions {
  app: string;
  bearer?: string;
  beforeTime?: string;
  builder?: boolean;
  cdn?: string;
  channel?: string;
  csrf?: string;
  delay?: number;
  display?: string;
  domain?: string;
  html?: boolean;
  locale: string;
  loglevel?: number;
  moderation?: string;
  monitor?: string;
  nonce?: string;
  period?: number;
  presentation: string;
  retention?: number;
  shadow?: boolean;
  slide?: string;
  slides?: string[];
  storage: string;
  suspended?: boolean;
  token?: string;
  version: string;
}

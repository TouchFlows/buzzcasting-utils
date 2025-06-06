/**
 * Storage Options
 */
export declare interface IStorageOptions {
  app: string;
  builder?: boolean;
  domain?: string;
  cdn?: string;
  channel?: string;
  presentation: string;
  slide?: string;
  slides?: string[];
  display?: string;
  monitor?: string;
  version: string;
  storage: string;
  token?: string;
  bearer?: string;
  csrf?: string;
  moderation?: string;
  nonce?: string;
  beforeTime?: string;
  delay?: number;
  period?: number;
  retention?: number;
  suspended?: boolean;
  loglevel?: number;
  locale: string;
}

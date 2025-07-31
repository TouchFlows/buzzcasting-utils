export declare interface IPreferences {
  preferences: IPreference[];
}

export declare interface IPreference {
  id: string;
  value?: string;
  update?: number;
  type?: string;
}

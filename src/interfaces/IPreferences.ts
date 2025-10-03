export interface IPreferences {
  preferences: IPreference[];
}

export interface IPreference {
  id: string;
  value?: string;
  update?: number;
  type?: string;
}

import type { ICloud, IDashboards, IImages, IMessages, IPreferences, IPresentations, IQuery, ISeries, ISlides, IWidgets } from ".";


/**
 * API Response
 */
export declare interface IResponse {
  data:
    | IDashboards
    | IImages
    | IMessages
    | ISeries
    | ICloud
    | ISlides
    | IPresentations
    | IPreferences
    | IWidgets
    | null;
  message: string;
  success: boolean;
  query?: IQuery;
}
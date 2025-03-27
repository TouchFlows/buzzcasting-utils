import type { ICloud, IMessages, IQuery, ISeries } from ".";
import { IDashboards, ISlides, IPresentations, IPreferences, IWidgets } from "..";

/**
 * API Response
 */
export declare interface IResponse {
  data:
    | IDashboards
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
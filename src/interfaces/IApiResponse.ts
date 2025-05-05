import { ICloud } from "./ICloud";
import { IDashboard } from "./IDashboards";
import { IImage } from "./IImages";
import { ISlide } from "./ILayout";
import { IMessage } from "./IMessages";
import { IPreference } from "./IPreferences";
import { IPresentation } from "./IPresentations";
import { IQuery } from "./IQuery";
import { ISeries } from "./ISeries";
import { IWidget } from "./IWidgets";

export declare interface IApiResponse {
  data:
    | IDashboard[]
    | IImage[]
    | IMessage[]
    | ISeries
    | ICloud
    | ISlide[]
    | IPresentation[]
    | IPreference[]
    | IWidget[]
    | null;
  message: string;
  success: boolean;
  query?: IQuery;
}
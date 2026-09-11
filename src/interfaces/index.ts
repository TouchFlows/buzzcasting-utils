import { ICloud } from "./ICloud";
import { IMessages } from "./IMessages";
import { ISeries } from "./ISeries";

export * from "./IApiResponse";
export * from "./ICloud";
export * from "./ICloudInfluencers";
export * from "./ICss";
export * from "./IOptions";
export * from "./ICountries";
export * from "./IDashboards";
export * from "./ID3Options";
export * from "./IDynamics";
export * from "./IEchartsLine";
export * from "./IGraph";
export * from "./IGraphStyle";
export * from "./IImages";
export * from "./IJsonWidget";
export * from "./ILayout";
export * from "./ILegend";
export * from "./IMessages";
export * from "./IModal";
export * from "./IPie";
export * from "./IPreferences";
export * from "./IPresentations";
export * from "./IResponse";
export * from "./IRotatingGlobe";
export * from "./ISeries";
export * from "./IShow";
// Named (not wildcard) re-export: ISlideLayout.ts declares its own generic
// Settings/Content/Component helper interfaces that collide with
// IJsonWidget.ts's identically-named ones - only the one type actually
// needed outside this file is exported here.
export type { ISlideLayout } from "./ISlideLayout";
export * from "./ISlides";
export * from "./IStorageOptions";
export * from "./IQuery";
export * from "./IWidgets";
export * from "./IWidgetSettings";
export * from "../enums/ShapeType";

export type ApiData = ISeries & IMessages & ICloud;

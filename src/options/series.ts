import { type ISeriesOptions } from "../interfaces";

export const seriesOptions = (elem: any): ISeriesOptions => {
  return {
    css: {
      arrowdown: elem.cssArrowDown,
      arrowup: elem.cssArrowUp,
      body: elem.cssBody,
      brand: elem.cssBrand,
      change: elem.cssChange,
      count: elem.cssCount,
      down: elem.cssDown,
      up: elem.cssUp,
    },
    // @ts-ignore
    time: {
      format: elem.timeFormat,
    },
    date: {
      format: elem.dateFormat,
    },
    show: {
      brand: elem.showBrand ?? true,
      date: elem.showDate ?? false,
    },
    config: {
      fixed: elem.configFixed,
      abbreviate: elem.configAbbreviate ?? true,
    },
  };
};

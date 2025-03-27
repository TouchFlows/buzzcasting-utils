import { ICloudOptions } from "../interfaces";

export const cloudOptions = (elem: any): ICloudOptions => {
  return {
    // animation: {
    // 	interval: elem.interval,
    // 	animation: elem.animation,
    // 	speed: elem.speed,
    // 	parentTag: elem.tagName.toLowerCase()
    // },
    css: {
      backdrop: elem.cssBackdrop,
      body: elem.cssBody,
      brand: elem.cssBrand,
      chart: elem.cssChart,
      container: elem.cssContainer,
      count: elem.cssCount,
      dark: elem.cssDark,
      date: elem.cssDate,

      host: elem.cssHost,
      image: elem.cssImage,
      key: elem.cssKey,
      legend: elem.cssLegend,
      title: elem.cssTitle,

      widget: elem.cssWidget,
    },
    dateformat: {
      time: elem.timeFormat,
      date: elem.dateFormat,
    },
    show: {
      brand: elem.showBrand,
      date: elem.showDate,
    },
    colors: elem.colors.split(","),
    dimensions: {
      width: elem.dimensionsWidth,
      height: elem.dimensionsHeight,
    },
    pie: {
      radius: {
        inner: elem.pieRadiusInner,
        outer: elem.pieRadiusOuter,
      },
      animation: {
        duration: elem.pieAnimationDuration,
      },
    },
    kpi: {
      name: elem.kpiName,
    },
    legend: {
      count: {
        width: elem.legendCountWidth, // '48px'
      },
      key: {
        width: elem.legendKeyWidth, //'10px',
      },
      width: elem.legendWidth, //'140px',
      position: elem.legendPosition, //'right',
      gap: {
        column: elem.legendGapColumn,
        row: elem.legendGapRow,
      },
      show: {
        percentage: elem.legendShowPercentage,
      },
    },
    bubbles: {
      size: elem.bubblesSize,
      classlist: elem.bubblesClasslist, //getComputedStyle(this.el).fontFamily,
      force: elem.bubblesForce, //-3,
      color: elem.bubblesColor,
    },
    config: {
      fixed: elem.configFixed,
      abbreviate: elem.configAbbreviate,
    },
  };
};

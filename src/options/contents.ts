// import { ICloudOptions } from 'buzzcasting-utils'

const contentsOptions = (elem: any): any => {
  return {
    css: {
      body: elem.cssBody,
      card: elem.cssCard,
      widget: elem.cssWidget,
    },
    youtube: {
      list: elem.youtubeList,
      title: elem.youtubeTitle,
    },
    qr: {
      text: elem.qrText,
      correction: elem.qrCorrection,
      margin: elem.qrMargin,
      scale: elem.qrScale,
      colorDark: elem.qrColorDark,
      colorLight: elem.qrColorLight,
      //qrVersion: number;
      outputMode: elem.qrOutputMode,
    },
  };
};
export default contentsOptions;

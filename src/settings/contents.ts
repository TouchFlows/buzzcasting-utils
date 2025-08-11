const contentSettings = (widgets: any) => {
  widgets.push({
    tag: "contents-widget",
    label: "Contents",
    attr: {
      css: {
        body: "w-96 aspect-video",
        card: "grid grid-cols-1 place-center",
        widget: "",
      },
      qr: {
        text: "https://www.touchflows.com",
        correction: "H",
        margin: 4,
        scale: 4,
        colorDark: "#000000ff",
        colorLight: "#ffffffff",
        //qrVersion: number;
        outputMode: "SVG",
      },
      youtube: {
        list: "",
        title: "Youtube Playlist",
      },
    },
  });
};
export default contentSettings;

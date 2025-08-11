const cardSettings = (widgets: any) => {
  widgets.push({
    tag: "cards-widget",
    label: "Cards",
    attr: {
      brand: {
        size: "l",
      },
      animation: {
        interval: 8000,
        animation: 0,
        speed: "",
        parentTag: "cards-widget",
      },
      css: {
        avatar:
          "max-w-12 h-12 max-h-12 w-12 rounded-full bg-contain bg-no-repeat bg-center",
        backdrop: "brightness(0.8)",
        body: "overflow-hidden text-base",
        brand: "h-6 w-6 text-black bg-white/50 rounded-full text-shadow-none",
        card: "h-full text-white font-sans",
        dark: false,
        date: "text-gray-400",
        dynamics: "text-shadow-none",
        handle: "text-sm text-ellipsis text-nowrap overflow-hidden",
        host: "",
        image: "bg-cover bg-center bg-no-repeat",
        kpi: "",
        label: "",
        name: "font-bold text-base text-ellipsis text-nowrap overflow-hidden",
        sender: "text-ellipsis",
        title: "",
        video: "",
        widget: "",
      },
      time: {
        format: "",
      },
      date: {
        format: "",
      },
      show: {
        approve: false,
        avatar: true,
        brand: true,
        date: true,
        dynamics: false,
        kpi: false,
        sender: true,
        star: false,
        visible: false,
        debug: false,
      },
      globe: {
        settings: {
          canvas: "relative -left-24 -top-24",
          card: "relative -left-20",
          width: 330,
          height: 330,
        },
        colors: {
          arc: "rgba(255,255,255,0.7)",
          border: "rgba(255,255,255,0.1)",
          country: "rgba(1, 138, 96, 0.6)",
          land: "rgba(0,0,0,0.7)",
          sphere: "rgba(255,255,255,0.1)",
        },
      },
    },
  });
};
export default cardSettings;

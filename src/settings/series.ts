const seriesSettings = (widgets: any) => {
  widgets.push({
    tag: "series-widget",
    label: "Series Data",
    attr: {
      colors:
        "#052001,#103214,#1d4622,#2a5b31,#377140,#448751,#529f62,#5fb674,#6dcf87,#7be89a",
      css: {
        arrowdown:
          "bg-arrow-down-red rounded-full h-6 w-6 bg-white text-red-500",
        arrowup:
          "bg-arrow-up-green rounded-full h-6 w-6 bg-white text-green-500",
        body: "px-9 text-40 font-light gap-x-3",
        brand: "w-6 h-6",
        change: "font-serif-regular text-2xl place-self-center",
        count: "font-serif-regular text-4xl place-self-center",
        down: "text-red-500 self-end",
        label: "text-white text-5xl font-light",
        up: "text-green-500 self-end",
      },

      time: {
        format: "",
      },
      date: {
        format: "",
      },
      dimensions: {
        width: 300,
        height: 300,
      },
      show: {
        brand: true,
        date: false,
        kpi: false,
      },
      config: {
        fixed: 2,
        abbreviate: true,
        label: "",
      },
    },
  });
};
export default seriesSettings;

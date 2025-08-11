const cloudSettings = (widgets: any) => {
  widgets.push({
    tag: "cloud-widget",
    label: "Indicators / Wordcloud",
    fields: [
      "component",
      "layout",
      "data-dashboard",
      "data-widget",
      "animation",
      "interval",
    ],
    attr: {
      css: {
        up: "text-green-500 self-end",
        down: "text-red-500 self-end",
        "arrow-up":
          "bg-arrow-up-green rounded-full h-6 w-6 bg-white text-green-500",
        "arrow-down":
          "bg-arrow-down-red rounded-full h-6 w-6 bg-white text-red-500",
        chart: "justify-items-center",
        body: "",
        brand: " w-6 h-6",
        count: "font-serif-regular text-4xl place-self-center",
        change: "font-serif-regular text-2xl place-self-center",
        highlight: "border border-solid",
        host: "grid",
        legend: "w-60 mb-1 justify-stretch grid gap-1",
        key: "h-3 w-3 center",
        row: "text-white border-t-1 border-gray-700 h-10 pb-2",
        separator:
          "col-span-2 bg-gradient-to-r from-transparent from-10% via-gray-400 via-50% to-transparent to-90%",
        label: "text-lg",
        widget: "grid",
        highlighted: "text-xl text-white upper",
      },
      animation: {
        interval: 8000,
        animation: 7,
        speed: "",
      },
      bubbles: {
        label: "",
        size: "14px",
        classlist: "",
        force: -3,
        color: "#0000ffff",
        multiplier: 1,
      },
      components: [
        { label: "D3 Pie", value: "pie-d3" },
        { label: "KPI Name", value: "kpi-name" },
      ],
      config: { fixed: 2, abbreviate: true, chunk: 3, items: 24 },
      colors:
        "#052001,#103214,#1d4622,#2a5b31,#377140,#448751,#529f62,#5fb674,#6dcf87,#7be89a",
      time: {
        format: "",
      },
      date: {
        format: "",
      },
      dimensions: {
        width: 440,
        height: 290,
      },
      highlight: {
        label: "Brand",
        color: "#052001",
      },
      kpi: {
        name: "",
      },
      legend: {
        key: { width: "10px" },
        label: { width: "1fr" },
        count: { width: "40px" },
        width: "240px",
        position: "right",
        show: { percentage: true },
        gap: {
          column: "0px",
          row: "0px",
        },
      },
      pie: {
        colors:
          "#052001,#103214,#1d4622,#2a5b31,#377140,#448751,#529f62,#5fb674,#6dcf87,#7be89a",
        dimensions: {
          width: 440,
          height: 290,
        },
        radius: {
          inner: 70,
          outer: 110,
        },
        animation: {
          duration: 2000,
        },
      },
      words: {
        multiplier: 10,
        padding: 5,
        range: "0.2,0.4,0.6,0.8",
      },
      show: {
        emojis: true,
        brand: true,
        date: false,
        trend: false,
        hashtags: false,
        debug: false,
      },
      debug: false,
    },
  });
};
export default cloudSettings;

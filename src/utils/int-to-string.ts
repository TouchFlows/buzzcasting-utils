export const intToString = (
  num: any,
  digits: number = 0,
  abbreviate: boolean = true,
  locale: string = "en"
): string => {
  if (num === undefined) return "";
  num =
    typeof num === "string" || num instanceof String
      ? parseFloat(num.replace(/[^0-9.]/g, ""))
      : num;

  if (abbreviate === false) {
    return num.toLocaleString(locale);
  }

  if (num < 1000) {
    // MTM: remove .toString())
    return (Math.round(num * 100) / 100).toFixed(digits);
    //return (num = ("" + num).replace(/[^0-9.]/g, ""));
  }

  num = num.toString().replace(/[^0-9.]/g, "");

  let si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  let index: number;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }

  return (
    (num / si[index].v)
      .toFixed(digits)
      .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s
  );
};

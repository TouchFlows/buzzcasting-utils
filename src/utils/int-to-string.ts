export const intToString = (
  num: any,
  digits: number = 0,
  abbreviate: boolean = true,
  locale: string = "en",
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
    return Math.round(num) === num ? num : num.toFixed(digits);
    //return (Math.round(num * 100) / 100).toFixed(digits);
    //return (num = ("" + num).replace(/[^0-9.]/g, ""));
  }

  num = num.toString().replace(/[^0-9.]/g, "");

  let si = [
    { v: 1e3, s: "k" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "G" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
    { v: 1e21, s: "Z" },
    { v: 1e24, s: "Y" },
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

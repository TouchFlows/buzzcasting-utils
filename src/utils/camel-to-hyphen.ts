export const camelToHyphen = (str: string) => {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
};

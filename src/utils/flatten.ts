export const flatten = (obj: any, res = {}, parentKey = "") => {
  for (let key in obj) {
    let modifiedKeyName: string = parentKey ? `${parentKey}-${key}` : key;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flatten(obj[key], res, modifiedKeyName);
    } else {
      if (obj[key] !== "") {
        //@ts-ignore
        res[modifiedKeyName] = obj[key];
      }
    }
  }
  return res;
};

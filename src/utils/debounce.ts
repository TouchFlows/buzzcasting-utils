export const debounce = (func: Function, timeout: number = 300) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const stall = (func: Function, timeout: number = 300) => {
  let timer: NodeJS.Timeout | undefined;
  return (...args: any[]) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
};

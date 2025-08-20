export const sendEvent = (
  name: string,
  detail: any = {},
  target: "window" | "document" = "window"
) => {
  const ev = new CustomEvent(name, {
    detail: detail,
    bubbles: true,
    cancelable: true,
    composed: true,
  });
  switch (target) {
    case "window":
      globalThis.window.dispatchEvent(ev);
      break;
    case "document":
      globalThis.document.dispatchEvent(ev);
      break;
  }
};

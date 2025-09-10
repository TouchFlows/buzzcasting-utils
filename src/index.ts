export * from "./enums";

export * from "./utils";

export * from "./interfaces";

declare global {
  interface Window {
    __bc: {
      opts: any;
    };
  }
}

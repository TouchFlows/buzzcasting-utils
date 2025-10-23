declare global {
  interface Window {
    __bc: {
      logger: Worker;
      opts: any;
    };
  }
}
export * from "./enums";

export * from "./utils";

export * from "./interfaces";

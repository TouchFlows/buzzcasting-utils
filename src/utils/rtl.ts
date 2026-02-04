import type { IMessage } from "..";

export function rtl(message: IMessage): { [key: string]: string } {
  switch (message.language) {
    case "ar":
      return {
        direction: "rtl",
        textAlign: "right",
      };
    default:
      return {
        direction: "ltr",
        textAlign: "left",
      };
  }
}

export const dir = (message: IMessage): "rtl" | "ltr" => {
  switch (message.language) {
    case "ar":
    case "ml":
      return "rtl";
    default:
      return "ltr";
  }
};

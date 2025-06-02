import type { IMessage } from "..";

export function formatContent(
  message: IMessage,
  titleCss: string = "font-bold"
): string {
  return `${
    message?.title !== null
      ? `<div class="${titleCss}">${message.title}</div>`
      : ""
  }${
    message?.content
      ? message.content.replace(/\n\n/g, "\n").replace(/\n/g, "<br/>")
      : ""
  }`;
}

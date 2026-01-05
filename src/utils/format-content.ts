import type { IMessage } from "..";

export function formatContent(
  message: IMessage,
  headingCss: string = "font-bold"
): string {
  return `${
    message?.title !== null
      ? `<div title="heading" class="${headingCss}">${message.title}</div>`
      : ""
  }${
    message?.content
      ? message.content.replace(/\n\n/g, "\n").replace(/\n/g, "<br/>")
      : ""
  }`;
}

import type { IMessage } from "..";

export function formatContent(
  message: IMessage,
  headingCss: string = "font-bold"
): string {
  return `${
    /* the title is printed only when there is one: it used `!== null`, which is
     * true for `undefined` too, so a payload without a title rendered the word
     * "undefined" into the body - and that word is text, so every report
     * readiness check counted the card as painted */
    message?.title
      ? `<div title="heading" class="${headingCss}">${message.title}</div>`
      : ""
  }${
    message?.content
      ? message.content.replace(/\n\n/g, "\n").replace(/\n/g, "<br/>")
      : ""
  }`;
}

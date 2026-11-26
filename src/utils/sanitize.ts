import type { IMessage } from "..";

export function sanitize(messages: IMessage[]): IMessage[] {
  const filteredMessages: IMessage[] = messages.filter(
    (item) => item !== undefined
  );
  filteredMessages.forEach((message: IMessage) => {
    // remove all links
    //
    if (typeof window !== "undefined" && window.__bc?.opts?.suspended === true) {
      message.content =
        "License suspended, please contact your Sales Representative to restore service";
    } else {
      message.content =
        message.content?.replace(
          /(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)((\?.*)?)/g,
          ""
        ) || ""; /* eslint-disable-line regexp/no-misleading-capturing-group */
    }

    /* `!== null` let a payload with no sender field at all through to
     * `message.sender.title`, which threw inside cards-widget's render and took
     * every card on the widget with it. `== null` covers undefined and null; the
     * empty sender below is what a message without one is meant to get. */
    if (message.sender != null) {
      switch (true) {
        case message.sender.title === "Unknown author":
          message.sender.title = "";
          message.sender.name = "";
          break;
        case message.sender.title === message.sender.name:
          message.sender.name = "";
          break;
        case message.channel === "tw":
          message.sender.name = `@${message.sender.name}`;
          break;
      }
    } else {
      message.sender = {
        title: "",
        name: "",
        id: "",
        avatar: "",
        bio: "",
        location: "",
        following: 0,
        verified: 0,
        listed: 0,
        followers: 0,
        favourites: 0,
        messages: 0,
        influence: 0,
      };
    }

    /* `link !== ""` treated "not the empty string" as "a URL": a payload with no
     * link at all (undefined or null) threw `Invalid URL`, and so did a link that
     * is not a URL. A message with no domain to show keeps its empty title. */
    const link = typeof message.link === "string" ? message.link.trim() : "";
    if (message.sender.title === "" && link !== "") {
      try {
        message.sender.title = new URL(link).hostname.replace("www.", "");
      } catch {
        /* not a URL, so there is no domain to print */
      }
    }
  });
  return filteredMessages;
}

import type { IMessage } from "..";

export function sanitize(messages: IMessage[]): IMessage[] {
  const filteredMessages: IMessage[] = messages.filter(
    (item) => item !== undefined
  );
  filteredMessages.forEach((message: IMessage) => {
    // remove all links
    if (window["BuzzCasting"].getOptions().suspended === true) {
      message.content =
        "License suspended, please contact your Sales Representative to restore service";
    } else {
      message.content =
        message.content?.replace(
          /(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)((\?.*)?)/g,
          ""
        ) || ""; /* eslint-disable-line regexp/no-misleading-capturing-group */
    }

    if (message.sender !== null) {
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
        avatar: "default",
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

    if (message.sender.title === "" && message.link !== "") {
      const domain = new URL(message.link);
      message.sender.title = domain.hostname.replace("www.", "");
    }
  });
  return filteredMessages;
}

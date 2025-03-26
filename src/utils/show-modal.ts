import { IMessage } from "..";

export function showModal(
  e: MouseEvent,
  widget: any,
  message: IMessage,
  options: any
) {
  e.stopPropagation();
  widget.showModal({
    showComponent: "card-modal",
    props: { data: message, options },
  });
}

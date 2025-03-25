import { IMessage } from "..";
import Widget from "../widget";

export function showModal(
	e: MouseEvent,
	widget: Widget,
	message: IMessage,
	options: any
) {
	e.stopPropagation();
	widget.showModal({
		showComponent: "card-modal",
		props: { data: message, options },
	});
}

import { API, CSS } from "../enums";
import { IQuery } from "../interfaces";

export const typeCss = (query: IQuery | undefined): string => {
	switch (query?.type) {
		case API.MESSAGES:
			return CSS.MESSAGES;
		case API.SERIES:
			return CSS.SERIES;
		case API.CLOUD:
			return CSS.CLOUD;
		default:
			return CSS.NO_UPDATES;
	}
};

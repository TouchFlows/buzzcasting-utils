import { type ICardOptions } from "../interfaces"

export const cardOptions = (elem: any): ICardOptions => {
	return {
		brand: {
			show: elem.brandShow,
			size: elem.brandSize
		},
		animation: {
			interval: elem.interval,
			animation: elem.animation,
			speed: elem.speed,
			parentTag: elem.localName
		},
		css: {
			avatar: elem.cssAvatar,
			backdrop: elem.cssBackdrop,
			body: elem.cssBody,			
			brand: elem.cssBrand,
			card: elem.cssCard,
			container: elem.cssContainer,
			dark: elem.cssDark,
			date: elem.cssDate,
			dynamics: elem.cssDynamics,			
			handle: elem.cssHandle,
			host: elem.cssHost,
			image: elem.cssImage,
			kpi: elem.cssKpi,
			label: elem.cssLabel,
			name: elem.cssName,
			sender: elem.cssSender,
			title: elem.cssTitle,
			video: elem.cssVideo,
			widget: elem.cssWidget
		},
		dateformat: {
			time: elem.timeFormat,
			date: elem.dateFormat
		},
		show: {
			approve:elem.showApprove ,
			avatar: elem.showAvatar,
			brand: elem.showBrand,	
			date: elem.showDate,		
			dynamics: elem.showDynamics,
			kpi: elem.showKpi,
			sender: elem.showSender,
			star: elem.showStar,
			visible:elem.showApprove
		}
	}
}


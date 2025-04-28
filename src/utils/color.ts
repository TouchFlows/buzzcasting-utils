export const randomColor = () => {
	return Math.floor(Math.random() * 16777215).toString(16)
}
export const randomRGBAfull = () => {
	var o = Math.round,
		r = Math.random,
		s = 255
	return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'
}
export const randomRGBA = () => {
	var o = Math.round,
		r = Math.random,
		s = 255
	return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ', 0)'
}
export const randomRGB = () => {
	var o = Math.round,
		r = Math.random,
		s = 255
	return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')'
}

export const RGBAchangeA = (str:string, opacity: string) => {
	str = str.substring(str.indexOf('(') + 1, str.indexOf(')'))
	let arr: string[] = str.split(',')
	arr = arr.map(element => {
		return parseFloat(element.trim()).toString()
	})
	str = 'background-color: rgba(' + parseInt(arr[0]) + ',' + parseInt(arr[1]) + ',' + parseInt(arr[2]) + ',' + opacity + ');'
	return str
}
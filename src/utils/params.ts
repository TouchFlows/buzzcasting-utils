export function getParameterByName(key: string) {
	const match = RegExp(`[?&]${key}=([^&]*)`).exec(window.location.search)
	return (match && decodeURIComponent(match[1].replace(/\+/g, ' '))) || null
}
export const getQueryParam = (param: string) => {
	const params = new Proxy(new URLSearchParams(window.location.search), {
		// @ts-ignore
		get: (searchParams, prop) => searchParams.get(prop),
	})
	// @ts-ignore
	return params[param]
}

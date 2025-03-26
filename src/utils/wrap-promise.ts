

export const wrapPromise = (promise: any, delay: number, reason: string) => {
	return Promise.race([promise, awaitTimeout(delay, reason)])
}

const awaitTimeout = (delay: number, reason: string) => {
	return new Promise((resolve, reject) => setTimeout(() => (reason === undefined ? resolve('ok') : reject(reason)), delay))
}

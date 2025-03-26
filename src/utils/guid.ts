export const getGuid = (): string => {
	return [gen(2), gen(1), gen(1), gen(1), gen(3)].join('-')
}

const gen = (count: number) => {
	let out = ''
	for (let i = 0; i < count; i++) {
		// tslint:disable-next-line:no-bitwise
		out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
	}
	return out
}

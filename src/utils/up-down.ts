export const upDownColor = (change: number) => {
	switch (true) {
		case change < 0:
			return 'text-down text-xs'
		case change > 0:
			return 'text-up text-xs'
		default:
			return 'text-white text-xs'
	}
}
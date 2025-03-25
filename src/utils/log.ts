export const log = (level: number = 0, message: any[]) => {
	switch (true) {
		case level > 3:
			console.debug(...message)
			break
		case level > 2:
      console.info(...message)
			break
		case level > 1:
      console.warn(...message)
			break
		case level > 0:
      console.error(...message)
			break
		default:
	}
}

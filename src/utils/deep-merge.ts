export function deepMerge(objs: any) {
	objs.reduce(
		(acc: any, obj: any) =>
			Object.keys(obj).reduce(
				(innerAcc, key) => ({
					...innerAcc,
					[key]:
						key in acc
							? typeof acc[key] === "object" &&
							  acc[key] !== null &&
							  typeof obj[key] === "object" &&
							  obj[key] !== null
								? deepMerge([acc[key], obj[key]])
								: obj[key]
							: obj[key],
				}),
				acc
			),
		{}
	);
}

export const LISTS_TYPES = Object.freeze({
	ONE_TIME: 'ONE_TIME',
	REGULAR: 'REGULAR'
});

export function getListHeadings (type){
	const titles = {
		[LISTS_TYPES.ONE_TIME]: 'One Time List',
		[LISTS_TYPES.REGULAR]: 'Regular List'
	};
	return titles[type] || [ titles.ONE_TIME ];
};

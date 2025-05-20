import masterJson from './master.json';

export interface BookCategoryDS {
	data: {
		bestsellers: {
			asin: string;
			author: string;
			cover_image: string;
			// description: string;
			length: string;
			minutes: number;
			narrated_by: string;
			ratings: {
				overall: string;
				performance: string;
				story: string;
			};
			review_counts: {
				overall: number;
				performance: number;
				story: number;
			};
			series: string;
			title: string;
			url: string;
		}[];
		category: {
			href: string;
			title: string;
		};
	};
	href: string;
	title: string;
	average?: number;
};

export function getCategories(): BookCategoryDS[] {
	const categories: BookCategoryDS[] = masterJson.categories;
	for (const cat of categories) {
		const total = cat.data.bestsellers.reduce((t, a) => t + a.minutes, 0);
		cat.average = Math.floor(total / cat.data.bestsellers.length);
		cat.data.bestsellers = cat.data.bestsellers.sort((a,b) => b.minutes - a.minutes);
	}
	categories.sort((a, b) => (b.average ?? 0) - (a.average ?? 0));
	return categories;
}

var companyInfo = {
	title: 'Prime Steak Restaurant',
	phone: '(718)-219-8652',
	location: 'New York, New York'
};

var specialMenuData = [
	{
		title: 'Super Barbecue Grill No Smoke',
		description:
			'Fried eggs, Steak, baked potate or frech fries side of vegetables.',
		price: '$25'
	},
	{
		title: '12oz AAA Steak',
		description: 'Steak, baked potate or frech fries side of vegetables.',
		price: '$42'
	},
	{
		title: 'Atlantic Salmon',
		description: 'Atlantic Salmon, Quinoa, Green Beans, side of vegetables.',
		price: '$35'
	}
];

var reviewsData = [
	{
		company: 'The Food Network',
		author: 'Joe Bastachi',
		authorInfo: 'winner of The Chef Masters Award',
		highlight: 'The best restaurant in Toronto',
		review:
			'Biltong sausage ribeye sirloin turkey meatloaf prosciutto shoulder frankfurter leberkas bresaola andouille alcatra.'
	},
	{
		company: 'Iron Chef Canada',
		author: 'Joe Bastachi',
		authorInfo: 'winner of The Chef Masters Award',
		highlight: 'The best restaurant in Toronto',
		review:
			'Biltong sausage ribeye sirloin turkey meatloaf prosciutto shoulder frankfurter leberkas bresaola andouille alcatra.'
	},
	{
		company: 'Chopped Canada',
		author: 'Joe Bastachi',
		authorInfo: 'winner of The Chef Masters Award',
		highlight: 'The best restaurant in Toronto',
		review:
			'Biltong sausage ribeye sirloin turkey meatloaf prosciutto shoulder frankfurter leberkas bresaola andouille alcatra.'
	},
	{
		company: 'Cooking Channel',
		author: 'Joe Bastachi',
		authorInfo: 'winner of The Chef Masters Award',
		highlight: 'The best restaurant in Toronto',
		review:
			'Biltong sausage ribeye sirloin turkey meatloaf prosciutto shoulder frankfurter leberkas bresaola andouille alcatra.'
	},
	{
		company: 'HG TV',
		author: 'Barefoot Contessa',
		authorInfo: 'winner of The Chef Masters Award',
		highlight: 'The best restaurant in Toronto',
		review:
			'Biltong sausage ribeye sirloin turkey meatloaf prosciutto shoulder frankfurter leberkas bresaola andouille alcatra.'
	}
];

var randomQuoteData = [
	{
		author: 'Johnny',
		Quote: 'Love Life, love cook, love love'
	},
	{
		author: 'Gabrielle Bernstein',
		Quote: "One of the most meditative times of my day is when I'm cooking."
	},
	{
		author: 'Zac Posen',
		Quote:
			"I'm not a chef. But I'm passionate about food - the tradition of it, cooking it, and sharing it."
	}
];

export const globalState = {
	count: 0,
	companyInfo,
	specialMenuData,
	reviewsData,
	randomQuoteData,
	reviewStatus: {
		currentReview: 0
	}
};

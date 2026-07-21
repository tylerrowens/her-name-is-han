import type { PageServerLoad } from './$types';

const locations = [
	{
		title: 'Koreatown',
		koreanName: '맨하탄 한인타운',
		StreetAddress: '17 E 31st St,',
		CityAddress: 'New York, NY 10016',
		phone: '(212) 779 . 9990',
		description:
			'Our original store where it all began. Established in 2015 in the beating heart of the city, most of the building’s natural charm is kept with homey lighting and a warm ambiance.',
		number: 1,
		variant: 'blue'
	},
	{
		title: 'West Village',
		koreanName: '맨하탄 한인타운',
		StreetAddress: '17 E 31st St,',
		CityAddress: 'New York, NY 10016',
		phone: '(212) 779 . 9990',
		description:
			'Our original store where it all began. Established in 2015 in the beating heart of the city, most of the building’s natural charm is kept with homey lighting and a warm ambiance.',
		number: 2,
		variant: 'navy'
	},
	{
		title: 'LES Bakery',
		koreanName: '맨하탄 한인타운',
		StreetAddress: '17 E 31st St,',
		CityAddress: 'New York, NY 10016',
		phone: '(212) 779 . 9990',
		description:
			'Our original store where it all began. Established in 2015 in the beating heart of the city, most of the building’s natural charm is kept with homey lighting and a warm ambiance.',
		number: 3,
		variant: 'brown'
	}
] as const;

export const load: PageServerLoad = async () => {
	return {
		locations
	};
};

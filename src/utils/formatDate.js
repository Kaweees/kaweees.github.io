import { config } from '$lib/config.ts';

const formatDate = (date) => {
	return new Date(date).toLocaleDateString(config.locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

export default formatDate;

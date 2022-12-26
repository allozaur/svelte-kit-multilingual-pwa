import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies, parent }) => {
	const { lang } = await parent();

	if (lang !== cookies.get('lang')) {
		cookies.set('lang', `${lang}`);
	}
}) satisfies LayoutServerLoad;

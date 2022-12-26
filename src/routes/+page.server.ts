import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies, parent }) => {
	const { availableLanguages } = await parent();
	const userPreferredLanguage = cookies.get('lang');

	if (userPreferredLanguage) throw redirect(302, userPreferredLanguage);
	if (availableLanguages) throw redirect(302, `${availableLanguages[0]}`);
}) satisfies PageServerLoad;

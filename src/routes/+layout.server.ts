/* eslint-disable no-useless-escape */
import type { LayoutServerLoad } from './$types';

export const load = (async ({ params, request }) => {
	const { lang, slug } = params;
	const acceptLanguage = request.headers.get('Accept-Language');
	const langCodeRegEx1 = /\;q\=.*/;
	const langCodeRegEx2 = /\-.*/;

	let availableLanguages;

	if (lang && acceptLanguage?.length) {
		availableLanguages = acceptLanguage.split(',');
		availableLanguages = [
			...new Set(
				availableLanguages.map((x) => x.replace(langCodeRegEx1, '').replace(langCodeRegEx2, ''))
			)
		];
	}

	return {
		availableLanguages,
		lang,
		slug
	};
}) satisfies LayoutServerLoad;

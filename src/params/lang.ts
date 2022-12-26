import type { ParamMatcher } from '@sveltejs/kit';

export function match(param: ParamMatcher) {
	return /de|en|es|fr|it|nl|pl|uk/.test(`${param}`);
}

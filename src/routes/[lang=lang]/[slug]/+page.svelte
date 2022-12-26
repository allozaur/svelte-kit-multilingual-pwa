<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { lang, slug } = data;
</script>

<h1>{lang}/{slug}</h1>

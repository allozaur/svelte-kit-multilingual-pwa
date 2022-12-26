<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { lang } = data;
</script>

<h1>{lang}</h1>

<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: item = data.item;

</script>

<div class="flex flex-col justify-center items-center mt-8">
	<div class="flex flex-col justify-center items-center border border-purple-400 p-2">
		<h1 class="text-2xl text-purple-600 font-semibold">{item.name}</h1>
	</div>

</div>


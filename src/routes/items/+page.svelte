<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: items = data.items;

</script>

<div class="flex flex-col justify-center items-center mt-8">
	<div class="flex flex-col justify-center items-center border border-purple-400 p-2">
		<h1 class="text-2xl text-purple-600 font-semibold">Items</h1>

		<ul class=" p-2 space-y-2">
			{#each items as item, key}
				<li class="border border-purple-300 rounded-lg p-2">{item.id}: {item.name}</li>
			{/each}
		</ul>

		<button on:click={addItem} class="btn ">Add Item</button>
	</div>

</div>


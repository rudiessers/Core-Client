<script lang="ts">
	import '../app.postcss';
	import Navigation from "$lib/components/Navigation.svelte";
</script>

<div class="w-full h-screen bg-gray-800 flex flex-col">
	<Navigation/>
	<div class="">
		<slot />
	</div>
</div>

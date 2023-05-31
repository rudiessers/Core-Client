<script lang="ts">
	import type {Route} from "../types/common";

	let routes: Route[] = [
		{ href: '/', label: 'home' },
		{ href: '/items', label: 'items'}
	]
</script>

<div class="top sticky bg-gray-900 flex justify-center">
	<ul class="flex flex-row">
		{#each routes as route}
			<li class="p-1 text-lg underline hover:text-white">
				<a href={route.href}>{route.label}</a>
			</li>
		{/each}
	</ul>
</div>
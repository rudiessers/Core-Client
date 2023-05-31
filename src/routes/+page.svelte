<script lang="ts">
	import { PUBLIC_CORE_API_URL } from '$env/static/public';

	let message = "Hello World!"

	console.log(PUBLIC_CORE_API_URL);
</script>

<div class="flex flex-row justify-center">
	<h1 class="text-2xl">{message}</h1>

</div>
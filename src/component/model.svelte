<script>
	import { dialog } from 'svelte-dialog';
	import { onMount } from 'svelte';

	export let name;
</script>

<div>
	<h1 class="text-2xl font-bold mb-4">Welcome to {name}'s New Page!</h1>
	<p class="text-lg">This is a new page created with SvelteKit and Tailwind CSS.</p>
</div>

<style>
	/* Add your custom styles here if needed */
</style>

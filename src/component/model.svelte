<!-- src/components/Modal.svelte -->
<script>
	import video from '$lib/images/playing.mp4';
	export let isOpen = false;
	let youtubeLink = 'https://www.youtube.com/watch?v=vbXTVu9U7xE';
</script>

{#if isOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<div class="absolute inset-0 bg-black opacity-50" />
		<div class="z-50 bg-white p-4 rounded-md shadow-md">
			<!-- YouTube trailer -->
			<iframe class="w-full h-96" src={video} frameborder="0" allowfullscreen />
			<div class="flex justify-end mt-4">
				<a
					href={youtubeLink}
					target="_blank"
					class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Watch on YouTube</a
				>
				<button on:click class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Close</button>
			</div>
		</div>
	</div>
{/if}

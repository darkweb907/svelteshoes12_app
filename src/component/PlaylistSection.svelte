<!-- src/components/PlaylistSection.svelte -->
<script>
	import { goto } from '$app/navigation';
	import welcome from '$lib/images/love.jpg';
	import sand from '$lib/images/ese.jpg';
	import logo from '$lib/images/ajo.jpg';
	import give from '$lib/images/give.jpg';

	const playlists = [
		{ id: 1, name: 'Playlist 1', image: welcome },
		{ id: 2, name: 'Playlist 2', image: sand },
		{ id: 3, name: 'Playlist 3', image: logo },
		{ id: 4, name: 'Playlist 4', image: give }
		// Add more playlists as needed
	];

	function navigateToPlaylist(playlistId) {
		goto(`/playlists/${playlistId}`);
	}
</script>

<section class="bg-gray-100 p-8">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-3xl font-semibold mb-4 cursor-pointern" on:click={() => goto('/')}>Home</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each playlists as playlist}
				<a
					href="javascript:void(0)"
					class="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
					on:click={() => navigateToPlaylist(playlist.id)}
				>
					<img src={playlist.image} alt={playlist.name} class="w-full h-48 object-cover" />
					<div class="p-4">
						<p class="text-lg font-semibold">{playlist.name}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Additional styling or overrides */
</style>

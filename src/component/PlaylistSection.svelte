<!-- src/components/PlaylistSection.svelte -->
<script>
	import { goto } from '$app/navigation';
	import welcome from '$lib/images/love.jpg';
	import sand from '$lib/images/ese.jpg';
	import logo from '$lib/images/ajo.jpg';
	import give from '$lib/images/give.jpg';
<<<<<<< HEAD
	import suru from '$lib/images/fi.jpg';
=======
	import Aje from '$lib/images/ise aje.jpg';
>>>>>>> 3785cdfdf1125054f4f9626eabd61fcf17e34c68

	const playlists = [
		{ id: 1, name: 'Playlist 1', image: welcome },
		{ id: 2, name: 'Playlist 2', image: sand },
		{ id: 3, name: 'Playlist 3', image: logo },
		{ id: 4, name: 'Playlist 4', image: give },
<<<<<<< HEAD
		{ id: 5, name: 'Playlist 5', image: suru }
=======
		{ id: 5, name: 'Playlist 5', image: Aje }
>>>>>>> 3785cdfdf1125054f4f9626eabd61fcf17e34c68
		// Add more playlists as needed
	];

	function navigateToPlaylist(playlistId) {
		goto(`/playlists/${playlistId}`);
	}
</script>

<section class="bg-gray-100 p-8">
	<div class="max-w-6xl mx-auto">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<h2 class="text-3xl font-semibold mb-4 cursor-pointern" on:click={() => goto('/')}>Home</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each playlists as playlist}
				<!-- svelte-ignore a11y-invalid-attribute -->
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

<!-- src/components/PlaylistSection.svelte -->
<script>
	import { playlists, songs } from '../data/music.js';
	import welcome from '$lib/images/love.jpg';
	import sand from '$lib/images/ese.jpg';
	import logo from '$lib/images/ajo.jpg';
	import give from '$lib/images/give.jpg';
	import Aje from '$lib/images/fi.jpg';
	import Ise from '$lib/images/ise.jpg';
	import Adura from '$lib/images/Adura.jpeg';

	const playlistImages = [welcome, sand, logo, give, Ise, Aje, Adura];
	const playlistCards = playlists.map((playlist, index) => ({
		...playlist,
		image: playlistImages[index],
		songCount: songs.filter((song) => song.playlistId === playlist.id).length
	}));
</script>

<section class="bg-gray-100 p-8">
	<div class="max-w-6xl mx-auto">
		<a href="/" class="inline-block text-3xl font-semibold mb-4 hover:underline">Home</a>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each playlistCards as playlist (playlist.id)}
				<a
					href="/playlists/{playlist.id}"
					class="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
				>
					<img src={playlist.image} alt={playlist.name} class="w-full h-48 object-cover" />
					<div class="p-4">
						<p class="text-lg font-semibold">{playlist.name}</p>
						<p class="text-sm text-gray-600">{playlist.songCount} songs</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Additional styling or overrides */
</style>

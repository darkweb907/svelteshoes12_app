<!-- src/routes/PlaylistDetails.svelte -->
<script>
	import { page } from '$app/stores';
	import { songs } from '../../../data/music';

	let playlistSongs = [];
	// Track the currently playing song
	// Access playlistId from the route params
	let playlistId = $page.params.movie;

	playlistSongs = songs.filter((song) => song.playlistId === parseInt(playlistId));
	let currentSong = null;
	let audioElement;
	function playSong(song) {
		if (currentSong === song) {
			currentSong = null;
			audioElement.pause();
		} else {
			if (currentSong) {
				currentSong = null;
				// Pause the currently playing song if there is one
				audioElement.pause();
			}

			currentSong = song;
			audioElement = new Audio(song.audioUrl);
			audioElement.preload = 'auto'; // Preload the audio
			audioElement.play();

			// Listen for the 'ended' event to reset the current song
			audioElement.addEventListener('ended', () => {
				currentSong = null;
			});
		}
	}

	function stopPlaying() {
		if (audioElement) {
			audioElement.pause();
			currentSong = null;
		}
	}
</script>

<main class="bg-gray-100 min-h-screen py-10 container px-5">
	<div class="max-w-6xl mx-auto">
		<h1 class="text-3xl font-semibold mb-6">Playlist Details</h1>
		<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each playlistSongs as song}
				<li class="bg-white shadow-md rounded-lg p-4 flex items-center">
					<div class="flex-grow">
						<p class="font-bold text-sm">{song.title}</p>
						<p class="text-gray-500">Segun Odumosu</p>
					</div>
					<div class="space-x-2">
						{#if currentSong === song}
							<button class="text-red-500" on:click={stopPlaying}>Stop</button>
						{:else}
							<button class="text-green-500" on:click={() => playSong(song)}>Play</button>
						{/if}
						<a
							href={song.downloadLink}
							download
							class="bg-green-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-green-600"
						>
							Download
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	@media (max-width: 360px) {
		li {
			font-size: 19px;
			align-items: flex-start;
			flex-direction: column;
			gap: 23px;
		}
	}
	/* Additional styling or overrides */
</style>

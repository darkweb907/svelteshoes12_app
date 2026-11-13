<!-- src/components/SongListSection.svelte -->
<script>
	import { onDestroy } from 'svelte';
	import { songs } from '../../data/music.js';

	let currentSong = null;
	let audioElement;
	let playbackError = '';

	async function playSong(song) {
		if (currentSong === song) {
			stopPlaying();
			return;
		}

		stopPlaying();
		playbackError = '';
		audioElement = new Audio(song.audioUrl);
		currentSong = song;

		audioElement.addEventListener(
			'ended',
			() => {
				currentSong = null;
				audioElement = null;
			},
			{ once: true }
		);
		audioElement.addEventListener(
			'error',
			() => {
				currentSong = null;
				audioElement = null;
				playbackError = `Unable to play "${song.title}".`;
			},
			{ once: true }
		);

		try {
			await audioElement.play();
		} catch (error) {
			if (currentSong === song) {
				currentSong = null;
				audioElement = null;
				playbackError = `Unable to play "${song.title}".`;
				console.error('Audio playback failed:', error);
			}
		}
	}

	function stopPlaying() {
		if (audioElement) {
			audioElement.pause();
			audioElement = null;
		}
		currentSong = null;
	}

	onDestroy(stopPlaying);
</script>

<div class="bg-gray-100 p-4 text-center">
	<h2 class="text-2xl font-semibold mb-4 text-center">Featured Songs</h2>
	<ul class="space-y-4 container mx-auto max-w-6xl">
		{#each songs.slice(0, 2) as song (song.id)}
			<li class="flex items-center justify-between border-b border-gray-300 py-2 text-left">
				<div class="flex-1">
					<p class="text-lg font-semibold">{song.title}</p>
					<p class="text-gray-600">{song.artist}</p>
				</div>
				<div class="flex items-center space-x-4">
					{#if currentSong === song}
						<button class="text-red-500" on:click={stopPlaying}>Stop</button>
					{:else}
						<button class="text-green-500" on:click={() => playSong(song)}>Play</button>
					{/if}
					<a class="text-blue-500" href={song.downloadLink} target="_blank" rel="noreferrer">
						Download
					</a>
				</div>
			</li>
		{/each}
	</ul>
	{#if playbackError}
		<p class="mt-4 text-red-600" role="alert">{playbackError}</p>
	{/if}
	<a
		href="/playlist"
		class="inline-block mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
	>
		See all playlists
	</a>
</div>

<style>
	/* Additional styling or overrides */
</style>

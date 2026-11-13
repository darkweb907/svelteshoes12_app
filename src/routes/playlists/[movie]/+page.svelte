<script>
	import { onDestroy } from 'svelte';

	export let data;

	let currentSongId = null;
	let audioElement;
	let playbackError = '';

	async function playSong(song) {
		if (currentSongId === song.id) {
			stopPlaying();
			return;
		}

		stopPlaying();
		playbackError = '';
		const audio = new Audio(song.audioUrl);
		audio.preload = 'none';
		audioElement = audio;
		currentSongId = song.id;
		audio.addEventListener(
			'ended',
			() => {
				if (audioElement === audio) {
					audioElement = null;
					currentSongId = null;
				}
			},
			{ once: true }
		);
		audio.addEventListener(
			'error',
			() => {
				if (audioElement === audio) {
					audioElement = null;
					currentSongId = null;
					playbackError = `Unable to play "${song.title}".`;
				}
			},
			{ once: true }
		);

		try {
			await audio.play();
		} catch (error) {
			if (audioElement === audio) {
				audioElement = null;
				currentSongId = null;
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
		currentSongId = null;
	}

	onDestroy(stopPlaying);
</script>

<main class="bg-gray-100 min-h-screen py-10 px-5">
	<div class="max-w-6xl mx-auto">
		<a href="/playlist" class="inline-block mb-6 text-blue-700 hover:underline">
			&larr; All playlists
		</a>
		<h1 class="text-3xl font-semibold mb-6">{data.playlist.name}</h1>
		<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.songs as song (song.id)}
				<li class="bg-white shadow-md rounded-lg p-4 flex items-center">
					<div class="flex-grow">
						<p class="font-bold text-sm">{song.title}</p>
						<p class="text-gray-500">{song.artist}</p>
					</div>
					<div class="space-x-2">
						{#if currentSongId === song.id}
							<button class="text-red-500" on:click={stopPlaying}>Stop</button>
						{:else}
							<button class="text-green-500" on:click={() => playSong(song)}>Play</button>
						{/if}
						<a
							href={song.downloadLink}
							target="_blank"
							rel="noreferrer"
							class="bg-green-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-green-600"
						>
							Open
						</a>
					</div>
				</li>
			{/each}
		</ul>
		{#if data.songs.length === 0}
			<p>This playlist does not have any songs yet.</p>
		{/if}
		{#if playbackError}
			<p class="mt-4 text-red-600" role="alert">{playbackError}</p>
		{/if}
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
</style>

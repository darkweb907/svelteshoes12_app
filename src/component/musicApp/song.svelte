<!-- src/components/SongListSection.svelte -->
<script>
	import { goto } from '$app/navigation';
	const songs = [
		{
			id: 1,
			title: 'Song 1',
			artist: 'Artist 1',
			url: 'https://ld-wt73.template-help.com/wt_prod-29724/audio/sound-1.mp3' // Update the path based on your project structure
		},
		{
			id: 2,
			title: 'Song 2',
			artist: 'Artist 2',
			url: 'https://cdn.trendybeatz.com/audio/Asake-Terminator-(TrendyBeatz.com).mp3' // Update the path based on your project structure
		}
		// Add more songs as needed
	];

	let currentSong = null;
	let audioElement;

	function playSong(song) {
		if (currentSong === song) {
			audioElement.pause();
			currentSong = null;
		} else {
			if (audioElement) {
				audioElement.pause();
			}
			audioElement = new Audio(song.url);
			audioElement.play();
			currentSong = song;
		}
	}

	function stopPlaying() {
		if (audioElement) {
			audioElement.pause();
			currentSong = null;
		}
	}

	function downloadSong(song) {
		const link = document.createElement('a');
		link.href = song.url;
		link.download = `${song.title}.mp3`;
		link.click();
	}
</script>

<div class="bg-gray-100 p-4 text-center">
	<h2 class="text-2xl font-semibold mb-4 text-center">Song List</h2>
	<ul class="space-y-4 container mx-auto max-w-6xl">
		{#each songs as song}
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
					<button class="text-blue-500" on:click={() => downloadSong(song)}>Download</button>
				</div>
			</li>
		{/each}
		<button
			class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
			on:click={() => goto('playlist')}
		>
			See More
		</button>
	</ul>
</div>

<style>
	/* Additional styling or overrides */
</style>

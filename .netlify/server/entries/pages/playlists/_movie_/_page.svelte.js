import { c as create_ssr_component, b as subscribe, d as each, e as escape, f as add_attribute } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const songs = [
  {
    id: 1,
    playlistId: 1,
    title: "Song 1",
    artist: "Artist 1",
    audioUrl: "https://cdn.trendybeatz.com/audio/Asake-Terminator-(TrendyBeatz.com).mp3",
    downloadLink: "https://cdn.trendybeatz.com/audio/Asake-Terminator-(TrendyBeatz.com).mp3"
  },
  {
    id: 2,
    playlistId: 1,
    title: "Song 2",
    artist: "Artist 2",
    audioUrl: "https://ld-wt73.template-help.com/wt_prod-29724/audio/sound-1.mp3",
    downloadLink: "https://ld-wt73.template-help.com/wt_prod-29724/audio/sound-1.mp3"
  },
  {
    id: 3,
    playlistId: 1,
    title: "Song 3",
    artist: "Artist 3",
    audioUrl: "/path/to/song3.mp3",
    downloadLink: "/path/to/song3.mp3"
  },
  {
    id: 4,
    playlistId: 1,
    title: "Song 4",
    artist: "Artist 4",
    audioUrl: "/path/to/song4.mp3",
    downloadLink: "/path/to/song4.mp3"
  },
  {
    id: 5,
    playlistId: 1,
    title: "Song 5",
    artist: "Artist 5",
    audioUrl: "/path/to/song5.mp3",
    downloadLink: "/path/to/song5.mp3"
  },
  {
    id: 6,
    playlistId: 1,
    title: "Song 6",
    artist: "Artist 6",
    audioUrl: "/path/to/song6.mp3",
    downloadLink: "/path/to/song6.mp3"
  },
  // Repeat the same structure for other playlists...
  {
    id: 7,
    playlistId: 2,
    title: "Song 7",
    artist: "Artist 7",
    audioUrl: "/path/to/song7.mp3",
    downloadLink: "/path/to/song7.mp3"
  },
  {
    id: 8,
    playlistId: 2,
    title: "Song 8",
    artist: "Artist 8",
    audioUrl: "/path/to/song8.mp3",
    downloadLink: "/path/to/song8.mp3"
  },
  {
    id: 9,
    playlistId: 2,
    title: "Song 9",
    artist: "Artist 9",
    audioUrl: "/path/to/song9.mp3",
    downloadLink: "/path/to/song9.mp3"
  },
  {
    id: 10,
    playlistId: 2,
    title: "Song 10",
    artist: "Artist 10",
    audioUrl: "/path/to/song10.mp3",
    downloadLink: "/path/to/song10.mp3"
  },
  {
    id: 11,
    playlistId: 2,
    title: "Song 11",
    artist: "Artist 11",
    audioUrl: "/path/to/song11.mp3",
    downloadLink: "/path/to/song11.mp3"
  },
  {
    id: 12,
    playlistId: 2,
    title: "Song 12",
    artist: "Artist 12",
    audioUrl: "/path/to/song12.mp3",
    downloadLink: "/path/to/song12.mp3"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let playlistSongs = [];
  let playlistId = $page.params.movie;
  playlistSongs = songs.filter((song) => song.playlistId === parseInt(playlistId));
  let currentSong = null;
  $$unsubscribe_page();
  return `  <main class="bg-gray-100 min-h-screen py-10 container px-5"><div class="max-w-6xl mx-auto"><h1 class="text-3xl font-semibold mb-6" data-svelte-h="svelte-f5wzg1">Playlist Details</h1> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(playlistSongs, (song) => {
    return `<li class="bg-white shadow-md rounded-lg p-4 flex space-x-4 items-center"><div class="flex-grow"><p class="text-lg font-semibold">${escape(song.title)}</p> <p class="text-gray-500">${escape(song.artist)}</p></div> <div class="space-x-2">${currentSong === song ? `<button class="text-red-500" data-svelte-h="svelte-146aioq">Stop</button>` : `<button class="text-green-500" data-svelte-h="svelte-1uwf1q7">Play</button>`} <a${add_attribute("href", song.downloadLink, 0)} download class="bg-green-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-green-600">Download
						</a></div> </li>`;
  })}</ul></div> </main>`;
});
export {
  Page as default
};

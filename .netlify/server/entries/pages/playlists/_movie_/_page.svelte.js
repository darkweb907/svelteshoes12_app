import { c as create_ssr_component, b as subscribe, d as each, e as escape, f as add_attribute } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const songs = [
  {
    id: 1,
    playlistId: 1,
    title: "For_the_love_of_music",
    artist: "Artist 1",
    audioUrl: "https://sndup.net/cxdd/d",
    downloadLink: "https://sndup.net/cxdd/d"
  },
  {
    id: 2,
    playlistId: 1,
    title: "Odourless",
    artist: "Artist 2",
    audioUrl: "https://sndup.net/c8k5/d",
    downloadLink: "https://sndup.net/c8k5/d"
  },
  {
    id: 3,
    playlistId: 1,
    title: "Someone To Love",
    artist: "Someone To Love",
    audioUrl: "https://sndup.net/tmh8/d",
    downloadLink: "https://sndup.net/tmh8/d"
  },
  {
    id: 4,
    playlistId: 1,
    title: "Just Against The tide",
    artist: "Artist 4",
    audioUrl: "https://sndup.net/fvkw/d",
    downloadLink: "https://sndup.net/fvkw/d"
  },
  {
    id: 5,
    playlistId: 1,
    title: "Epo Nbe Ewa Nbe",
    artist: "Artist 5",
    audioUrl: "https://sndup.net/xyk3/d",
    downloadLink: "https://sndup.net/xyk3/d"
  },
  {
    id: 6,
    playlistId: 1,
    title: "Love is Beautiful Thing",
    artist: "Artist 6",
    audioUrl: "https://sndup.net/brx9/d",
    downloadLink: "https://sndup.net/brx9/d"
  },
  // Repeat the same structure for other playlists...
  {
    id: 7,
    playlistId: 1,
    title: "Special day",
    artist: "Artist 7",
    audioUrl: "https://sndup.net/b334/d",
    downloadLink: "https://sndup.net/b334/d"
  },
  {
    id: 8,
    playlistId: 2,
    title: "Eko Ile",
    artist: "Artist 8",
    audioUrl: "https://sndup.net/y7kr/d",
    downloadLink: "https://sndup.net/y7kr/d"
  },
  {
    id: 9,
    playlistId: 2,
    title: "Iwa Lewa",
    artist: "Artist 9",
    audioUrl: "https://sndup.net/92fq/d",
    downloadLink: "https://sndup.net/92fq/d"
  },
  {
    id: 10,
    playlistId: 2,
    title: "Iya Lalabaro Omo",
    artist: "Artist 10",
    audioUrl: "https://sndup.net/d5jj/d",
    downloadLink: "https://sndup.net/d5jj/d"
  },
  {
    id: 11,
    playlistId: 2,
    title: "Ese Aiye ire",
    artist: "Artist 11",
    audioUrl: "https://sndup.net/nrxx/d",
    downloadLink: "https://sndup.net/nrxx/d"
  },
  {
    id: 12,
    playlistId: 2,
    title: "Eko",
    artist: "Artist 12",
    audioUrl: "https://sndup.net/jswf/d",
    downloadLink: "https://sndup.net/jswf/d"
  },
  // Repeat the same structure for other playlists...
  {
    id: 13,
    playlistId: 2,
    title: "Aiye Oba",
    artist: "Artist 7",
    audioUrl: "https://sndup.net/fxnk/d",
    downloadLink: "https://sndup.net/fxnk/d"
  },
  {
    id: 14,
    playlistId: 3,
    title: "Yi o soda",
    artist: "Artist 8",
    audioUrl: "https://sndup.net/pc6j/d",
    downloadLink: "https://sndup.net/pc6j/d"
  },
  {
    id: 15,
    playlistId: 3,
    title: "Ruby",
    artist: "Artist 9",
    audioUrl: "https://sndup.net/dsq3/d",
    downloadLink: "https://sndup.net/dsq3/d"
  },
  {
    id: 16,
    playlistId: 3,
    title: "Orimi Gbemi",
    artist: "Artist 10",
    audioUrl: "https://sndup.net/t9q2/d",
    downloadLink: "https://sndup.net/t9q2/d"
  },
  {
    id: 17,
    playlistId: 3,
    title: "Irede",
    artist: "Artist 11",
    audioUrl: "https://sndup.net/dc7z/d",
    downloadLink: "https://sndup.net/dc7z/d"
  },
  {
    id: 18,
    playlistId: 3,
    title: "Ajo ni more",
    artist: "Artist 12",
    audioUrl: "https://sndup.net/z72z/d",
    downloadLink: "https://sndup.net/z72z/d"
  },
  // Repeat the same structure for other playlists...
  {
    id: 19,
    playlistId: 3,
    title: "Igba olo bi orere",
    artist: "Artist 7",
    audioUrl: "https://sndup.net/927z/d",
    downloadLink: "https://sndup.net/927z/d"
  },
  {
    id: 20,
    playlistId: 4,
    title: "Yesterday is gone",
    artist: "Artist 8",
    audioUrl: "https://sndup.net/c5p3/d",
    downloadLink: "https://sndup.net/c5p3/d"
  },
  {
    id: 22,
    playlistId: 4,
    title: "Don't Give Up",
    artist: "Artist 10",
    audioUrl: "https://sndup.net/9g4q/d",
    downloadLink: "https://sndup.net/9g4q/d"
  },
  {
    id: 23,
    playlistId: 4,
    title: "I've Got The Groove",
    artist: "Artist 11",
    audioUrl: "https://sndup.net/xhsg/d",
    downloadLink: "https://sndup.net/xhsg/d"
  },
  {
    id: 24,
    playlistId: 5,
    title: "Fi Suru Si",
    artist: "Artist 11",
    audioUrl: "https://dl.sndup.net/tmmk2/AUD-20241113-WA0017.mp3",
    downloadLink: "https://dl.sndup.net/tmmk2/AUD-20241113-WA0017.mp3"
  },
  {
    id: 25,
    playlistId: 5,
    title: "Majemi Lese",
    artist: "Artist 11",
    audioUrl: "https://dl.sndup.net/3q6sy/AUD-20241113-WA0018.mp3",
    downloadLink: "https://dl.sndup.net/3q6sy/AUD-20241113-WA0018.mp3"
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 360px){li.svelte-1uukh3w{font-size:19px;align-items:flex-start;flex-direction:column;gap:23px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let playlistSongs = [];
  let playlistId = $page.params.movie;
  playlistSongs = songs.filter((song) => song.playlistId === parseInt(playlistId));
  let currentSong = null;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `  <main class="bg-gray-100 min-h-screen py-10 container px-5"><div class="max-w-6xl mx-auto"><h1 class="text-3xl font-semibold mb-6" data-svelte-h="svelte-f5wzg1">Playlist Details</h1> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(playlistSongs, (song) => {
    return `<li class="bg-white shadow-md rounded-lg p-4 flex items-center svelte-1uukh3w"><div class="flex-grow"><p class="font-bold text-sm">${escape(song.title)}</p> <p class="text-gray-500" data-svelte-h="svelte-1lwwhto">Segun Odumosu</p></div> <div class="space-x-2">${currentSong === song ? `<button class="text-red-500" data-svelte-h="svelte-146aioq">Stop</button>` : `<button class="text-green-500" data-svelte-h="svelte-1uwf1q7">Play</button>`} <a${add_attribute("href", song.downloadLink, 0)} download class="bg-green-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-green-600">Download
						</a></div> </li>`;
  })}</ul></div> </main>`;
});
export {
  Page as default
};

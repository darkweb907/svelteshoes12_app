import { c as create_ssr_component, o as onDestroy, e as escape, d as each, f as add_attribute } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 360px){li.svelte-1y29hve{font-size:19px;align-items:flex-start;flex-direction:column;gap:23px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let currentSongId = null;
  function stopPlaying() {
    currentSongId = null;
  }
  onDestroy(stopPlaying);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="bg-gray-100 min-h-screen py-10 px-5"><div class="max-w-6xl mx-auto"><a href="/playlist" class="inline-block mb-6 text-blue-700 hover:underline" data-svelte-h="svelte-q8xe4g">← All playlists</a> <h1 class="text-3xl font-semibold mb-6">${escape(data.playlist.name)}</h1> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(data.songs, (song) => {
    return `<li class="bg-white shadow-md rounded-lg p-4 flex items-center svelte-1y29hve"><div class="flex-grow"><p class="font-bold text-sm">${escape(song.title)}</p> <p class="text-gray-500">${escape(song.artist)}</p></div> <div class="space-x-2">${currentSongId === song.id ? `<button class="text-red-500" data-svelte-h="svelte-146aioq">Stop</button>` : `<button class="text-green-500" data-svelte-h="svelte-1uwf1q7">Play</button>`} <a${add_attribute("href", song.downloadLink, 0)} target="_blank" rel="noreferrer" class="bg-green-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-green-600">Open
						</a></div> </li>`;
  })}</ul> ${data.songs.length === 0 ? `<p data-svelte-h="svelte-vlt2rk">This playlist does not have any songs yet.</p>` : ``} ${``}</div> </main>`;
});
export {
  Page as default
};

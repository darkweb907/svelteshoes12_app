import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { p as playlists, s as songs } from "../../../chunks/music.js";
const welcome = "/_app/immutable/assets/love.cb372e20.jpg";
const sand = "/_app/immutable/assets/ese.198ee4c3.jpg";
const logo = "/_app/immutable/assets/ajo.f2df1b0d.jpg";
const give = "/_app/immutable/assets/give.500828d0.jpg";
const Aje = "/_app/immutable/assets/fi.5888898e.jpg";
const Ise = "/_app/immutable/assets/ise.cf85b0b7.jpg";
const Adura = "/_app/immutable/assets/Adura.31cd6f8e.jpeg";
const PlaylistSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const playlistImages = [welcome, sand, logo, give, Ise, Aje, Adura];
  const playlistCards = playlists.map((playlist, index) => ({
    ...playlist,
    image: playlistImages[index],
    songCount: songs.filter((song) => song.playlistId === playlist.id).length
  }));
  return `  <section class="bg-gray-100 p-8"><div class="max-w-6xl mx-auto"><a href="/" class="inline-block text-3xl font-semibold mb-4 hover:underline" data-svelte-h="svelte-8g5nqo">Home</a> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(playlistCards, (playlist) => {
    return `<a href="${"/playlists/" + escape(playlist.id, true)}" class="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"><img${add_attribute("src", playlist.image, 0)}${add_attribute("alt", playlist.name, 0)} class="w-full h-48 object-cover"> <div class="p-4"><p class="text-lg font-semibold">${escape(playlist.name)}</p> <p class="text-sm text-gray-600">${escape(playlist.songCount)} songs</p></div> </a>`;
  })}</div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PlaylistSection, "PlaylistSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

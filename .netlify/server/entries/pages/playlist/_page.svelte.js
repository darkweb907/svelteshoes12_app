import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const PlaylistSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const playlists = [
    {
      id: 1,
      name: "Playlist 1",
      image: "/path/to/playlist1-image.jpg"
    },
    {
      id: 2,
      name: "Playlist 2",
      image: "/path/to/playlist2-image.jpg"
    }
  ];
  return `  <section class="bg-gray-100 p-8"><div class="max-w-6xl mx-auto"><h2 class="text-3xl font-semibold mb-4" data-svelte-h="svelte-17jv9yu">Home</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(playlists, (playlist) => {
    return `<a href="javascript:void(0)" class="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"><img${add_attribute("src", playlist.image, 0)}${add_attribute("alt", playlist.name, 0)} class="w-full h-48 object-cover"> <div class="p-4"><p class="text-lg font-semibold">${escape(playlist.name)}</p></div> </a>`;
  })}</div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PlaylistSection, "PlaylistSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

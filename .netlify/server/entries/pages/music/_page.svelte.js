import { c as create_ssr_component, f as add_attribute, e as escape, o as onDestroy, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/footer.js";
import { s as songs } from "../../../chunks/music.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const video = "/_app/immutable/assets/playing.b22b89e5.mp4";
let youtubeLink = "https://youtu.be/70p8KzTXGqw?feature=shared";
const Model = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  return `  ${isOpen ? `<div class="fixed inset-0 z-50 flex items-center justify-center"><div class="absolute inset-0 bg-black opacity-50"></div> <div class="z-50 bg-white p-4 rounded-md shadow-md"> <iframe class="w-full h-96"${add_attribute("src", video, 0)} title="Segun Odumosu music video" frameborder="0" allowfullscreen></iframe> <div class="flex justify-end mt-4"><a${add_attribute("href", youtubeLink, 0)} target="_blank" class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Watch on YouTube</a> <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md" data-svelte-h="svelte-1phg8zi">Close</button></div></div></div>` : ``}`;
});
const lag = "/_app/immutable/assets/flute1.3988be24.jpg";
const brandText = "About Our Brand";
const brandDescription = "Segun Odumosu is a highly talented musician and enterprising entrepreneur. With a passion for music and an innate ability to create catchy tunes, Segun has made significant strides in the music industry.Starting his musical journey at a young age, Segun quickly realized his love for music and dedicated himself to honing his skills.";
const Brand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const brandImage = lag;
  return `  <section class="bg-gray-100 p-8" id="brand"><div class="max-w-5xl mx-auto"><div class="grid md:grid-cols-2 gap-8 items-center"><div class="md:order-2"><img${add_attribute("src", brandImage, 0)} alt="Brand Image" class="rounded-lg shadow-md sm:w-9/12"></div> <div class="md:order-1"><h2 class="text-3xl font-semibold mb-4">${escape(brandText)}</h2> <p class="text-lg text-gray-700">${escape(brandDescription)}</p></div></div></div> </section>`;
});
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-gray-100 p-8 text-center" id="play" data-svelte-h="svelte-n31cqi"><h3 class="text-xl text-gray-600">Listen to My Album</h3> </section>`;
});
const Song = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentSong = null;
  function stopPlaying() {
    currentSong = null;
  }
  onDestroy(stopPlaying);
  return `  <div class="bg-gray-100 p-4 text-center"><h2 class="text-2xl font-semibold mb-4 text-center" data-svelte-h="svelte-14na0lb">Featured Songs</h2> <ul class="space-y-4 container mx-auto max-w-6xl">${each(songs.slice(0, 2), (song) => {
    return `<li class="flex items-center justify-between border-b border-gray-300 py-2 text-left"><div class="flex-1"><p class="text-lg font-semibold">${escape(song.title)}</p> <p class="text-gray-600">${escape(song.artist)}</p></div> <div class="flex items-center space-x-4">${currentSong === song ? `<button class="text-red-500" data-svelte-h="svelte-146aioq">Stop</button>` : `<button class="text-green-500" data-svelte-h="svelte-1uwf1q7">Play</button>`} <a class="text-blue-500"${add_attribute("href", song.downloadLink, 0)} target="_blank" rel="noreferrer" data-svelte-h="svelte-zivj8e">Download
					</a></div> </li>`;
  })}</ul> ${``} <a href="/playlist" class="inline-block mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" data-svelte-h="svelte-18y784s">See all playlists</a> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isVideoOpen = true;
  const navLinks = [
    {
      text: "Segun Odumosu Band",
      url: "/music"
    },
    {
      text: "Jazzon Interior",
      url: "/interior"
    },
    { text: "Leather Work", url: "/shoes" }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<nav class="bg-black py-2">${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})}</nav> <main>${validate_component(Head, "Head").$$render($$result, {}, {}, {})} ${validate_component(Song, "Song").$$render($$result, {}, {}, {})} ${validate_component(Brand, "Brand").$$render($$result, {}, {}, {})}</main> ${validate_component(Model, "Model").$$render(
      $$result,
      { isOpen: isVideoOpen },
      {
        isOpen: ($$value) => {
          isVideoOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

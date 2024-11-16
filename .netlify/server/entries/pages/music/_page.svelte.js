import { c as create_ssr_component, f as add_attribute, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/footer.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const video = "/_app/immutable/assets/playing.b22b89e5.mp4";
let youtubeLink = "https://www.youtube.com/watch?v=vbXTVu9U7xE";
const Model = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  return `  ${isOpen ? `<div class="fixed inset-0 z-50 flex items-center justify-center"><div class="absolute inset-0 bg-black opacity-50"></div> <div class="z-50 bg-white p-4 rounded-md shadow-md"> <iframe class="w-full h-96"${add_attribute("src", video, 0)} frameborder="0" allowfullscreen></iframe> <div class="flex justify-end mt-4"><a${add_attribute("href", youtubeLink, 0)} target="_blank" class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Watch on YouTube</a> <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md" data-svelte-h="svelte-2s71wc">Close</button></div></div></div>` : ``}`;
});
const lag = "/_app/immutable/assets/flute1.3988be24.jpg";
const music_svelte_svelte_type_style_lang = "";
const brandText = "About Our Brand";
const brandDescription = "Segun Odumosu is a highly talented musician and enterprising entrepreneur. With a passion for music and an innate ability to create catchy tunes, Segun has made significant strides in the music industry.Starting his musical journey at a young age, Segun quickly realized his love for music and dedicated himself to honing his skills.";
const Brand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const brandImage = lag;
  return `  <section class="bg-gray-100 p-8" id="brand"><div class="max-w-5xl mx-auto"><div class="grid md:grid-cols-2 gap-8 items-center"><div class="md:order-2"><img${add_attribute("src", brandImage, 0)} alt="Brand Image" class="rounded-lg shadow-md sm:w-9/12"></div> <div class="md:order-1"><h2 class="text-3xl font-semibold mb-4">${escape(brandText)}</h2> <p class="text-lg text-gray-700">${escape(brandDescription)}</p></div></div></div> </section>`;
});
const albumYear = 2023;
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-gray-100 p-8 text-center" id="play"><h2 class="text-2xl font-semibold mb-4">${escape(albumYear)}</h2> <h3 class="text-xl text-gray-600" data-svelte-h="svelte-1xdvjq2">Listen to My Album</h3> </section>`;
});
const Song = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const songs = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      url: "https://sndup.net/xhsg/d"
      // Update the path based on your project structure
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      url: "https://sndup.net/c4m8/d"
      // Update the path based on your project structure
    }
  ];
  let currentSong = null;
  return `  <div class="bg-gray-100 p-4 text-center"><h2 class="text-2xl font-semibold mb-4 text-center" data-svelte-h="svelte-up41wu">Song List</h2> <ul class="space-y-4 container mx-auto max-w-6xl">${each(songs, (song) => {
    return `<li class="flex items-center justify-between border-b border-gray-300 py-2 text-left"><div class="flex-1"><p class="text-lg font-semibold">${escape(song.title)}</p> <p class="text-gray-600">${escape(song.artist)}</p></div> <div class="flex items-center space-x-4">${currentSong === song ? `<button class="text-red-500" data-svelte-h="svelte-146aioq">Stop</button>` : `<button class="text-green-500" data-svelte-h="svelte-1uwf1q7">Play</button>`} <button class="text-blue-500" data-svelte-h="svelte-8y11rs">Download</button></div> </li>`;
  })} <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" data-svelte-h="svelte-2oe4xa">See More</button></ul> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { text: "Segun Odumosu Band", url: "#main" },
    {
      text: "Jazzon Interior",
      url: "./interior"
    },
    { text: "Leather Work", url: "/shoes" }
  ];
  let isOpen = true;
  return ` <nav class="bg-black py-2">${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})}</nav>  <main>${validate_component(Head, "Head").$$render($$result, {}, {}, {})} ${validate_component(Song, "Song").$$render($$result, {}, {}, {})} ${validate_component(Brand, "Brand").$$render($$result, {}, {}, {})}</main>   ${validate_component(Model, "Model").$$render($$result, { isOpen }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

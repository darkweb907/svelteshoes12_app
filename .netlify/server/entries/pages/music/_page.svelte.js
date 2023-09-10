import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/footer.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const lag = "/_app/immutable/assets/flute1.3988be24.jpg";
const music_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".sep.svelte-2i3fbt{position:absolute;bottom:19%;left:50%;transform:translate(-50%, 0)}.carousel-team.svelte-2i3fbt{position:relative;top:-6px;left:0;width:100vw;height:100vh;background-size:contain;background-repeat:no-repeat;background-position:center;z-index:-1}.carousel-team.svelte-2i3fbt::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:-1}@keyframes svelte-2i3fbt-typewriter{to{opacity:1;transform:translateY(0)}}.animate-typewriter.svelte-2i3fbt{animation:svelte-2i3fbt-typewriter 0.3s ease forwards}@media(max-width: 800px){.sep.svelte-2i3fbt{bottom:22%}.carousel-team.svelte-2i3fbt{height:80vh}}",
  map: null
};
const Music = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="carousel-team bg-center flex flex-col items-center justify-center text-white px-5 md:h-4/6 svelte-2i3fbt"><h1 class="${"md:text-4xl text-lg text-center font-semibold mb-4 " + escape("", true)}">${``}</h1> <p class="${"md:text-lg mb-8 " + escape("", true) + " text-base text-center"}">Experience the soulful rhythm and energy of our music.</p></div> <div class="flex flex-col md:flex-row gap-3 sep svelte-2i3fbt" data-svelte-h="svelte-6kdvc"><a href="#brand" class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer whitespace-nowrap">Learn More about us</a> <a href="/playlist" class="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded">Listen to my Music</a> </div>`;
});
const brandText = "About Our Brand";
const brandDescription = "Segun Odumosu is a highly talented musician and enterprising entrepreneur. With a passion for music and an innate ability to create catchy tunes, Segun has made significant strides in the music industry.Starting his musical journey at a young age, Segun quickly realized his love for music and dedicated himself to honing his skills.";
const Brand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const brandImage = lag;
  return `  <section class="bg-gray-100 p-8" id="brand"><div class="max-w-5xl mx-auto"><div class="grid md:grid-cols-2 gap-8 items-center"><div class="md:order-2"><img${add_attribute("src", brandImage, 0)} alt="Brand Image" class="rounded-lg shadow-md sm:w-9/12"></div> <div class="md:order-1"><h2 class="text-3xl font-semibold mb-4">${escape(brandText)}</h2> <p class="text-lg text-gray-700">${escape(brandDescription)}</p></div></div></div> </section>`;
});
const albumYear = 2023;
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-gray-100 p-8 text-center"><h2 class="text-2xl font-semibold mb-4">${escape(albumYear)}</h2> <h3 class="text-xl text-gray-600" data-svelte-h="svelte-1xdvjq2">Listen to My Album</h3> </section>`;
});
const Song = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const songs = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      url: "https://ld-wt73.template-help.com/wt_prod-29724/audio/sound-1.mp3"
      // Update the path based on your project structure
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      url: "https://cdn.trendybeatz.com/audio/Asake-Terminator-(TrendyBeatz.com).mp3"
      // Update the path based on your project structure
    }
  ];
  let currentSong = null;
  return `  <div class="bg-gray-100 p-4 text-center"><h2 class="text-2xl font-semibold mb-4 text-center" data-svelte-h="svelte-up41wu">Song List</h2> <ul class="space-y-4 container mx-auto max-w-6xl">${each(songs, (song) => {
    return `<li class="flex items-center justify-between border-b border-gray-300 py-2 text-left"><div class="flex-1"><p class="text-lg font-semibold">${escape(song.title)}</p> <p class="text-gray-600">${escape(song.artist)}</p></div> <div class="flex items-center space-x-4">${currentSong === song ? `<button class="text-red-500" data-svelte-h="svelte-146aioq">Stop</button>` : `<button class="text-green-500" data-svelte-h="svelte-1uwf1q7">Play</button>`} <button class="text-blue-500" data-svelte-h="svelte-8y11rs">Download</button></div> </li>`;
  })} <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" data-svelte-h="svelte-2oe4xa">See More</button></ul> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".music.svelte-1bcpk1r{overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { text: "Segun Odumosu Band", url: "#main" },
    {
      text: "Jazzon Interior",
      url: "./interior"
    },
    { text: "Leather Work", url: "/shoes" }
  ];
  $$result.css.add(css);
  return `<nav class="bg-black py-2">${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})}</nav> <div class="music svelte-1bcpk1r">${validate_component(Music, "Music").$$render($$result, {}, {}, {})}</div> <main>${validate_component(Head, "Head").$$render($$result, {}, {}, {})} ${validate_component(Song, "Song").$$render($$result, {}, {}, {})} ${validate_component(Brand, "Brand").$$render($$result, {}, {}, {})}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

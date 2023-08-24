import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { N as Navbar } from "../../chunks/navbar.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".carousel-item.svelte-g0kr56{position:fixed;top:0;left:0;width:100vw;height:100vh;background-size:cover;background-position:center;z-index:-1}.carousel-item.svelte-g0kr56::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:-1}@keyframes svelte-g0kr56-typewriter{to{opacity:1;transform:translateY(0)}}.animate-typewriter.svelte-g0kr56{animation:svelte-g0kr56-typewriter 0.3s ease forwards}@media(max-width: 800px){.carousel-item.svelte-g0kr56{height:80vh}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { text: "Segun Odumsu Band", url: "/music" },
    {
      text: "Jazzon Interior",
      url: "/interior"
    },
    { text: "Leather Work", url: "/shoes" }
  ];
  $$result.css.add(css);
  return `<nav>${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})}</nav> <div class="carousel-item bg-center flex flex-col items-center justify-center text-white px-5 svelte-g0kr56"><h1 class="${"md:text-4xl text-lg text-center font-semibold mb-4 " + escape("", true)}">${``}</h1> <p class="${"md:text-lg mb-8 " + escape("", true) + " text-base text-center"}">Experience the soulful rhythm and energy of our music.</p> <div class="${"" + escape("", true) + " flex flex-col md:flex-row gap-3"}"><button class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded" data-svelte-h="svelte-15fwnbr">Learn More about us</button> <a href="/music" class="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded" data-svelte-h="svelte-1mk9jwk">Listen to my Music</a></div> </div>`;
});
export {
  Page as default
};

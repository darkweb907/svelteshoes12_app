import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar } from "../../chunks/navbar.js";
import { F as Footer } from "../../chunks/footer.js";
const seg = "/_app/immutable/assets/seg-1.168a4710.png";
const furnitureData = [
  { id: 1, name: "Sofa", imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  { id: 2, name: "leather sofa", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/03/WhatsApp-Image-2021-06-23-at-4.04.43-PM.jpeg" },
  { id: 2, name: "CONSOLE TABLE", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-08-at-2.17.54-PM-1.jpeg" },
  { id: 2, name: "Royal-Dining", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/03/06-Royal-Dining.jpg" }
  // Add more furniture items
];
const left_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".selected.svelte-1kom8q9{opacity:0.9}",
  map: null
};
const Left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedItem = null;
  $$result.css.add(css$1);
  return `  <section class="container mx-auto text-center my-16"><h1 class="font-bold text-2xl tracking-wider mt-5" data-svelte-h="svelte-kwxdlo">Check Out Our Projects....</h1> <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto mt-5 max-md:px-4">${each(furnitureData, (item) => {
    return `  <div class="relative bg-white rounded-lg shadow-lg overflow-hidden"><img class="w-full h-auto transform scale-100 transition-transform duration-300 hover:scale-110 aspect-[4/3]"${add_attribute("src", `${item.imageUrl}`, 0)}${add_attribute("alt", item.name, 0)}> <div class="${[
      "absolute inset-0 flex items-center justify-center opacity-0 bg-black text-white hover:opacity-90 transition-opacity duration-300 svelte-1kom8q9",
      selectedItem === item ? "selected" : ""
    ].join(" ").trim()}"><h2 class="text-xl font-semibold">${escape(item.name)}</h2></div> </div>`;
  })}</div> </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1kh7a3l{position:absolute;top:0}.carousel-y.svelte-1kh7a3l{position:relative;top:0;left:0;width:100%;height:100vh;background-size:cover;background-position-y:-130px;z-index:0}.carousel-y.svelte-1kh7a3l::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:-1}@keyframes svelte-1kh7a3l-typewriter{to{opacity:1;transform:translateY(0)}}.animate-typewriter.svelte-1kh7a3l{animation:svelte-1kh7a3l-typewriter 0.3s ease forwards}@media(max-width: 800px){.carousel-y.svelte-1kh7a3l{background-position-y:center}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$result.css.add(css);
  return `<div><div class="carousel-y bg-center flex flex-col items-center bac justify-center text-white px-5 svelte-1kh7a3l"><nav class="svelte-1kh7a3l">${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})}</nav> <h1 class="${"md:text-4xl text-lg text-center font-semibold mb-4 " + escape("", true)}">${``}</h1> <p class="${"md:text-lg mb-8 " + escape("", true) + " text-base text-center"}">Experience the soulful rhythm and energy of our music.</p> <div class="${"" + escape("", true) + " flex flex-col md:flex-row gap-3"}"><a href="/about" class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded" data-svelte-h="svelte-15igl17">Learn More about us</a> <a href="/music" class="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded" data-svelte-h="svelte-1mapq8a">Listen to my Music</a></div></div> <main><section class="first" data-svelte-h="svelte-1gbwepv"><div class="detail max-sm:ml-0 ml-14 grid grid-cols-2 gap-10 max-sm:p-5 max-sm:grid-cols-1 items-center"><div class="words max-sm:text-center max-md:mt-5"><h5 class="font-medium tracking-wide mb-1 text-xs uppercase">Music, the universal language that transcends boundaries</h5> <h2 class="font-bold max-lg:text-lg text-5xl capitalize leading-[3.5rem] mb-4 tracking-wider text-[#1a1a1a]">I&#39;m Segun Odumosu, Artisan-Creator.</h2> <p class="text-sm leading-6 text-gray-400">Hi there! I&#39;m Segun Odumosu, and I&#39;m passionate about various creative pursuits. I have
						a deep love for crafting beautiful shoes, expressing my soul through singing, and
						enhancing spaces with my interior design skills.</p> <div class="button flex max-sm:justify-center mt-5"><a href="/contact" class="p-3 flex gap-3 items-center rounded-full bg-red-500 hover:bg-white hover:border-2 hover:border-red-500 transition-all" type="submit"><i class="fas fa-phone phone-icon"></i> Contact Me!</a></div></div> <div class="img flex-1 flex justify-end"><img class="max-lg:aspect-[1/1] object-cover"${add_attribute("src", seg, 0)} alt=""></div></div></section> <section class="sec py-24 bg-slate-100" data-svelte-h="svelte-8fci1o"><div class="container mx-auto p-4"><h2 class="text-4xl text-center font-extrabold tracking-widest">Our Services</h2> <ul class="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-7 pr-6 mt-16"><li><a href="/playlist" class="inline-block mb-6 text-3xl max-md:text-2xl my-3 tracking-widest font-semibold">Music</a> <p class="text-sm leading-6 text-gray-400">Segun Odumosu is a highly talented musician and enterprising entrepreneur.</p></li> <li><a href="/interior" class="font-semibold inline-block mb-6 max-lg:text-2xl whitespace-nowrap ease-out text-3xl max-sm:text-3xl my-3 tracking-widest">Interior Design</a> <p class="text-sm leading-6 text-gray-400">This is a short description elaborating the service you have mentioned above</p></li> <li><a href="/shoes" class="font-semibold inline-block mb-6 text-3xl max-sm:text-3xl max-lg:text-2xl whitespace-nowrap my-3 tracking-widest transition-all duration-400">Leather Design</a> <p class="text-sm leading-6 text-gray-400">Explore our collection of high-quality leather shoes for men,woman and chidren in
							different design.</p></li></ul></div></section> <section class="product">${validate_component(Left, "Left").$$render($$result, {}, {}, {})}</section></main> <footer class="mt-20">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer> </div>`;
});
export {
  Page as default
};

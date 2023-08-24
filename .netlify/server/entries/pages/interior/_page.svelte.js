import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { w as welcome, s as sand, l as logo } from "../../../chunks/sax2.js";
import { F as Footer } from "../../../chunks/footer.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const testimonies = [
    // Add your testimony objects here
    {
      id: 1,
      imageUrl: welcome,
      name: "John Doe",
      position: "CEO, Company A",
      quote: "” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “"
    },
    {
      id: 1,
      imageUrl: welcome,
      name: "John Doe",
      position: "CEO, Company A",
      quote: "” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “"
    },
    {
      id: 1,
      imageUrl: welcome,
      name: "John Doe",
      position: "CEO, Company A",
      quote: "” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “"
    }
  ];
  return `  <section class="bg-gray-100 py-24"><div class="max-w-7xl mx-auto px-4 text-center"><h2 class="text-3xl font-semibold mb-4 my-4" data-svelte-h="svelte-1oliy7q">testimonies</h2> <p class="text-gray-600 leading-relaxed px-6 max-w-4xl mx-auto my-10" data-svelte-h="svelte-1249775">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit,
			necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${each(testimonies, (testimony) => {
    return `<div class="bg-white p-4 rounded-lg shadow-md"> <div class="flex items-center"><img${add_attribute("src", testimony.imageUrl, 0)}${add_attribute("alt", testimony.name, 0)} class="w-10 h-10 rounded-full mr-3"> <div><p class="text-gray-800 font-semibold">${escape(testimony.name)}</p> <p class="text-gray-600">${escape(testimony.position)}</p> </div></div> <p class="mt-4 text-gray-600">${escape(testimony.quote)}</p> </div>`;
  })}</div> </div> </section>`;
});
const card_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-yg08ag{font-family:'Open Sans', sans-serif}.carousel.svelte-yg08ag{background-image:url($lib/images/sax.avif);position:relative;top:-85px;left:0;width:100%;height:100vh;background-size:cover;background-position:center;z-index:-1}.carousel.svelte-yg08ag::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:-1}@keyframes svelte-yg08ag-typewriter{to{opacity:1;transform:translateY(0)}}.animate-typewriter.svelte-yg08ag{animation:svelte-yg08ag-typewriter 0.3s ease forwards}@media(max-width: 800px){.carousel.svelte-yg08ag{height:60vh}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="carousel bg-center flex flex-col items-center justify-center text-white px-5 svelte-yg08ag"><h1 class="${"md:text-4xl text-lg text-center font-semibold mb-4 " + escape("", true)}">${``}</h1> <p class="${"md:text-lg mb-8 " + escape("", true) + " text-base text-center"}">Experience the soulful rhythm and energy of our music.</p> <div class="${"" + escape("", true) + " flex flex-col md:flex-row gap-3"}"><a href="#flush" class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded" data-svelte-h="svelte-1sniz94">Learn More about us</a> <a href="/music" class="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded" data-svelte-h="svelte-1mk9jwk">Listen to my Music</a></div></div> <section class="container mx-auto text-center svelte-yg08ag" data-svelte-h="svelte-u5f9kr"><div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0"> <div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"><i class="fas fa-camera text-2xl mb-2"></i> <h3 class="text-lg font-semibold mb-1">Photography</h3> <p class="text-gray-600">Capture beautiful moments with our interior photography services.</p></div>  <div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"><i class="fas fa-heart text-2xl mb-2"></i> <h3 class="text-lg font-semibold mb-1">Decor</h3> <p class="text-gray-600">Discover exquisite decor pieces that transform your space.</p></div>  <div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"><i class="fas fa-star text-2xl mb-2"></i> <h3 class="text-lg font-semibold mb-1">Design</h3> <p class="text-gray-600">Elevate your interiors with our innovative design solutions.</p></div></div> </section>  <section class="mt-7 py-16 svelte-yg08ag" id="flush" data-svelte-h="svelte-1yk93in"><div class="max-w-7xl mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div><h2 class="text-3xl text-center md:text-left font-semibold mb-4">Our Services</h2> <p class="text-gray-600 text-xl text-justify">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
					there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
					the Semantics, a large language ocean.</p></div>  <div class="md:order-last"><img${add_attribute("src", sand, 0)} alt="Interior Design" class="w-full shadow-md"></div></div></div></section> <section class="mt-7 py-16 bg-slate-50 svelte-yg08ag" id="paint" data-svelte-h="svelte-15tzhbk"><div class="max-w-7xl mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div><h2 class="text-3xl text-center md:text-left font-semibold mb-4">Our Services</h2> <p class="text-gray-600 text-xl text-justify">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
					there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
					the Semantics, a large language ocean.</p></div>  <div class="md:order-first"><img${add_attribute("src", welcome, 0)} alt="Interior Design" class="w-full shadow-md"></div></div></div></section>  <section class="py-16 svelte-yg08ag" id="draught" data-svelte-h="svelte-a6uqng"><div class="max-w-4xl mx-auto px-4 container mx-auto"><div class="text-center"><h2 class="text-3xl font-semibold mb-4">Our Projects</h2> <p class="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit,
				necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p></div>  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"> <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", logo, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold">Image 1</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", logo, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold">Image 1</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", logo, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold">Image 1</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", logo, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold">Image 1</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", logo, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold">Image 1</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", logo, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold">Image 1</p></div></div> </div></div></section> <section class="svelte-yg08ag">${validate_component(Test, "Test").$$render($$result, {}, {}, {})}</section> <footer>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { text: "Furniture", url: "#draught" },
    { text: "Pop Wall", url: "#draught" },
    { text: "painting", url: "#paint" },
    { text: "Flush Door", url: "#flush" }
  ];
  return `<nav class="container mx-auto">${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})}</nav> <main><div class="interior px-5 md:px-0">${validate_component(Card, "Card").$$render($$result, {}, {}, {})}</div></main>`;
});
export {
  Page as default
};

import { c as create_ssr_component, f as each, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/footer.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const weldone = "/_app/immutable/assets/pop1.dc58f0fd.jpg";
const sand = "/_app/immutable/assets/furniture1.cc1a02d6.jpg";
const chair = "/_app/immutable/assets/chair.ada4ace3.jpg";
const fork = "/_app/immutable/assets/furniture.1f4ee59b.jpg";
const pop = "/_app/immutable/assets/pop.80dd276c.jpg";
const paint = "/_app/immutable/assets/paint.44eb4d80.jpg";
const draw = "/_app/immutable/assets/draw.a6f6a857.jpg";
const bed = "/_app/immutable/assets/bed.63291f9b.jpg";
const welcome = "/_app/immutable/assets/flute.46a445f9.jpg";
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
  code: ".both.svelte-10xlw98{position:absolute;bottom:36%;left:50%;transform:translate(-50%, 0)}p.svelte-10xlw98{font-size:16px}section.svelte-10xlw98{font-family:'Open Sans', sans-serif}.carousel-s.svelte-10xlw98{background-image:url($lib/images/interiors.jpg);position:relative;top:-92px;left:0;width:100%;height:100vh;background-size:cover;background-position:center;z-index:-1}.carousel-s.svelte-10xlw98::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:-1}@keyframes svelte-10xlw98-typewriter{to{opacity:1;transform:translateY(0)}}.animate-typewriter.svelte-10xlw98{animation:svelte-10xlw98-typewriter 0.3s ease forwards}@media(max-width: 800px){.carousel-s.svelte-10xlw98{height:80vh}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="carousel-s bg-center flex flex-col items-center bac justify-center text-white px-5 svelte-10xlw98"><h1 class="${"md:text-4xl text-lg text-center font-semibold mb-4 " + escape("", true)}">${``}</h1> <p class="${"md:text-lg mb-8 " + escape("", true) + " text-base text-center svelte-10xlw98"}">Experience the soulful rhythm and energy of our music.</p></div> <div class="flex flex-col md:flex-row gap-3 both svelte-10xlw98" data-svelte-h="svelte-1ggzrf9"><a href="#flush" class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer whitespace-nowrap">Learn More about us</a> <a href="/music" class="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded">Listen to my Music</a></div> <section class="container mx-auto text-center px-5 svelte-10xlw98" data-svelte-h="svelte-by63u1"><div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0"> <div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"><i class="fas fa-camera text-2xl mb-2"></i> <h3 class="text-lg font-semibold mb-1">Photography</h3> <p class="text-gray-600 svelte-10xlw98">Capture beautiful moments with our interior photography services.</p></div>  <div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"><i class="fas fa-heart text-2xl mb-2"></i> <h3 class="text-lg font-semibold mb-1">Decor</h3> <p class="text-gray-600 svelte-10xlw98">Discover exquisite decor pieces that transform your space.</p></div>  <div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"><i class="fas fa-star text-2xl mb-2"></i> <h3 class="text-lg font-semibold mb-1">Design</h3> <p class="text-gray-600 svelte-10xlw98">Elevate your interiors with our innovative design solutions.</p></div></div> </section>  <section class="mt-7 py-16 svelte-10xlw98" id="flush" data-svelte-h="svelte-1a6o7s9"><div class="max-w-7xl mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div><h2 class="text-4xl text-center md:text-left font-bold mb-4">About Us</h2> <p class="text-gray-600 text-xl text-justify w-auto md:w-4/5 svelte-10xlw98">jazzon Interior Services is a registered interior design company based in Nigeria. With a
					reputation for excellence and a commitment to providing exceptional interior design
					solutions, Jazzon Interior Services serves clients across the country.</p> <p class="text-gray-600 text-xl text-justify w-auto md:w-4/5 svelte-10xlw98">Led by a team of skilled and experienced professionals, Jazzon Interior Services offers a
					wide range of services to cater to various design needs. Whether it&#39;s residential,
					commercial, or hospitality spaces, the company specializes in creating functional and
					aesthetic interior designs that align with clients&#39; preferences and requirements.</p></div>  <div class="md:order-last"><img alt="design"${add_attribute("src", sand, 0)} class="w-full shadow-md"></div></div></div></section> <section class="mt-7 py-16 bg-slate-50 svelte-10xlw98" id="paint" data-svelte-h="svelte-1fo3lpv"><div class="max-w-7xl mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div><h2 class="text-3xl text-center md:text-left font-semibold mb-4">Our Services</h2> <p class="text-gray-600 text-xl text-center md:text-left svelte-10xlw98">Painting,draughtsmanship,3D Epoxy wall/ceiling/floor,POP wall/ceiling
					floor,Furniture/Cabinetmakng,Flush door and general merchandize</p></div>  <div class="md:order-first"><img${add_attribute("src", weldone, 0)} alt="Interior Design" class="w-full shadow-md"></div></div></div></section>  <section class="py-16 svelte-10xlw98" id="draught" data-svelte-h="svelte-1lfj2c8"><div class="max-w-4xl mx-auto px-4 container"><div class="text-center"><h2 class="text-3xl font-semibold mb-4">Our Projects</h2> <p class="text-gray-600 leading-relaxed svelte-10xlw98">Our Project are carried out by groups of competent artisans to give our clients the
				best they desire</p></div>  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"> <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"> <img${add_attribute("src", pop, 0)} alt="Image 8" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold svelte-10xlw98">POP</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", chair, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold svelte-10xlw98">Chair</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", fork, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold svelte-10xlw98">Furniture</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", draw, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold svelte-10xlw98">DRAW</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", paint, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold svelte-10xlw98">PAINT</p></div></div>  <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"><img${add_attribute("src", bed, 0)} alt="Image 1" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><p class="text-white text-center font-semibold svelte-10xlw98">BED</p></div></div> </div></div></section> <section class="svelte-10xlw98">${validate_component(Test, "Test").$$render($$result, {}, {}, {})}</section> <footer>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { text: "Furniture", url: "#draught" },
    { text: "Pop Wall", url: "#draught" },
    { text: "painting", url: "#paint" },
    { text: "Flush Door", url: "#flush" }
  ];
  return `${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})} ${validate_component(Card, "Card").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

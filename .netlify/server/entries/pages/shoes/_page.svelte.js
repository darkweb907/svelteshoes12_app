import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/navbar.js";
import { F as Footer } from "../../../chunks/footer.js";
const fork$1 = "/_app/immutable/assets/segun1.8651ecba.jpg";
const sand$1 = "/_app/immutable/assets/segun5.012478d1.jpg";
const welcome = "/_app/immutable/assets/shoe3.14eeac21.jpg";
const logo$1 = "/_app/immutable/assets/shoe4.47eb3862.jpg";
const bags_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".grid-section.svelte-4pkwrz.svelte-4pkwrz{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:1rem;padding:2rem}.grid-item.svelte-4pkwrz.svelte-4pkwrz{background-color:#f0f0f0;padding:1rem;border-radius:8px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);display:flex;flex-direction:column;justify-content:space-between}.item-heading.svelte-4pkwrz.svelte-4pkwrz{font-size:1.5rem;margin-bottom:1rem}.shop-now-link.svelte-4pkwrz.svelte-4pkwrz{text-align:left;margin-top:auto}.shop-now-link.svelte-4pkwrz button.svelte-4pkwrz{color:#3490dc;text-decoration:none}.image-wrapper.svelte-4pkwrz.svelte-4pkwrz{text-align:right}.item-image.svelte-4pkwrz.svelte-4pkwrz{max-width:100%;height:auto;border-radius:8px}img.svelte-4pkwrz.svelte-4pkwrz{aspect-ratio:2/1;object-fit:cover}",
  map: null
};
const Bags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="grid-section svelte-4pkwrz" id="bags" data-svelte-h="svelte-11xgg62"><div class="grid-item svelte-4pkwrz"><div class="item-heading svelte-4pkwrz">Leather Men Shoes</div> <p>Explore our collection of high-quality leather shoes for men.</p> <div class="shop-now-link svelte-4pkwrz"><button href="#" class="svelte-4pkwrz">Shop Now</button></div></div> <div class="grid-item svelte-4pkwrz"><div class="item-heading svelte-4pkwrz">Featured Collection</div> <p>Discover our handpicked selection of premium leather goods.</p> <div class="shop-now-link svelte-4pkwrz"><button href="#" class="svelte-4pkwrz">Shop Now</button></div></div> <div class="image-wrapper svelte-4pkwrz"><img${add_attribute("src", welcome, 0)} alt="Leather Men Shoes" class="item-image svelte-4pkwrz"></div> <div class="image-wrapper svelte-4pkwrz"><img${add_attribute("src", logo$1, 0)} alt="Featured Collection" class="item-image svelte-4pkwrz"></div> </section>`;
});
const belt = "/_app/immutable/assets/belt.688e196f.jpg";
const logo = "/_app/immutable/assets/bag2.c2d6dfbd.jpg";
const bed = "/_app/immutable/assets/bag.8de83894.jpg";
const cardshoe_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".grid-item.svelte-1qi9o9.svelte-1qi9o9{position:relative;overflow:hidden;background-color:#f0f0f0;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);transition:transform 0.3s}.grid-item.svelte-1qi9o9.svelte-1qi9o9:hover{transform:scale(1.05)}.overlay.svelte-1qi9o9.svelte-1qi9o9{width:100%;position:absolute;background-color:rgba(0, 0, 0, 0.5);display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;transition:opacity 0.3s;height:49px;bottom:0}.grid-item.svelte-1qi9o9:hover .overlay.svelte-1qi9o9{opacity:1}.overlay.svelte-1qi9o9 button.svelte-1qi9o9{color:white;padding:0.5rem 1rem;border-radius:9999px;cursor:pointer;transition:background-color 0.3s}.overlay.svelte-1qi9o9 button.svelte-1qi9o9:hover{background-color:#2779bd}img.svelte-1qi9o9.svelte-1qi9o9{aspect-ratio:1/1;object-fit:cover}",
  map: null
};
const Cardshoe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const gridItems = [
    {
      title: "SHOES",
      content: "Content for Item 1",
      imageUrl: welcome
    },
    {
      title: "BELT",
      content: "Content for Item 2",
      imageUrl: belt
    },
    {
      title: "WALLET",
      content: "Content for Item 3",
      imageUrl: logo
    },
    {
      title: "BAGS",
      content: "Content for Item 4",
      imageUrl: bed
    }
  ];
  $$result.css.add(css$2);
  return `<section id="shoes" class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-10 container md:px-6 px-4">${each(gridItems, (item) => {
    return `<div class="grid-item max-w-md mx-auto svelte-1qi9o9"><h3 class="font-medium leading-relaxed text-xl pl-3">${escape(item.title)}</h3> <p class="my-2 leading-relaxed text-xl font-light pl-3">${escape(item.content)}</p> <img${add_attribute("src", item.imageUrl, 0)}${add_attribute("alt", item.title, 0)} class="svelte-1qi9o9"> <div class="overlay svelte-1qi9o9" data-svelte-h="svelte-1kkozqv"><button class="svelte-1qi9o9">Shop Now</button></div> </div>`;
  })} </section>`;
});
const chair$1 = "/_app/immutable/assets/seg.6638d3aa.jpg";
const Customer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="p-8 bg-gray-100 text-center grid gap-4 grid-cols-1 md:grid-cols-3" data-svelte-h="svelte-13oz0o1"><div class="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg"><img${add_attribute("src", sand$1, 0)} alt="Customer 1" class="w-20 h-20 object-cover rounded-full mb-2 mx-auto"> <blockquote class="text-lg font-medium mb-4">&quot;I&#39;m amazed by the quality of their products. The leather shoes I bought from them are
			incredibly comfortable and stylish.&quot;</blockquote> <p class="text-gray-600">John Smith</p></div> <div class="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg"><img${add_attribute("src", chair$1, 0)} alt="Customer 2" class="w-20 h-20 rounded-full mb-2 mx-auto"> <blockquote class="text-lg font-medium mb-4">&quot;The craftsmanship of their leather goods is outstanding. I&#39;ve been a customer for years and
			I&#39;m never disappointed.&quot;</blockquote> <p class="text-gray-600">Sarah Johnson</p></div> <div class="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg"><img${add_attribute("src", fork$1, 0)} alt="Customer 3" class="w-20 h-20 rounded-full mb-2 mx-auto"> <blockquote class="text-lg font-medium mb-4">&quot;Exceptional service and attention to detail. I received my order promptly and it exceeded my
			expectations.&quot;</blockquote> <p class="text-gray-600">Michael Davis</p></div></section>`;
});
const sand = "/_app/immutable/assets/bet.053140b8.jpg";
const weldone = "/_app/immutable/assets/shoe1.20b06386.jpg";
const slide_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".carousel.svelte-gm7ugd{width:100%;height:300px;overflow:hidden;position:relative}.carousel-image.svelte-gm7ugd{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0}",
  map: null
};
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [{ src: bed }, { src: sand }, { src: weldone }];
  let currentIndex = 0;
  $$result.css.add(css$1);
  return `<div class="carousel container mx-auto svelte-gm7ugd">${each(images, ({ src }, i) => {
    return `${currentIndex === i ? `<img${add_attribute("src", src, 0)}${add_attribute("alt", `Image ${i + 1}`, 0)} class="carousel-image svelte-gm7ugd">` : ``}`;
  })} </div>`;
});
const chair = "/_app/immutable/assets/gucci.32a70115.jpg";
const fork = "/_app/immutable/assets/red.f8ed48ba.jpg";
const tabs_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tab.svelte-1rzabue.svelte-1rzabue{cursor:pointer;padding:0.5rem 1rem;border:2px solid transparent;border-bottom-width:0;transition:border-color 0.2s, background-color 0.2s;background-color:#f0f0f0;border-radius:0.25rem 0.25rem 0 0}.tab.active.svelte-1rzabue.svelte-1rzabue{border-color:#3490dc;border-bottom-width:2px;background-color:white;border-radius:0.25rem 0.25rem 0 0}.tab.svelte-1rzabue.svelte-1rzabue:hover{background-color:#e5e5e5}.grid.svelte-1rzabue.svelte-1rzabue{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:1rem;padding:1rem}.card.svelte-1rzabue.svelte-1rzabue{display:flex;flex-direction:column;align-items:center;background-color:white;border-radius:8px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);padding:1rem;transition:transform 0.2s, box-shadow 0.2s}.card.svelte-1rzabue.svelte-1rzabue:hover{transform:translateY(-5px);box-shadow:0 8px 12px rgba(0, 0, 0, 0.2)}.card.svelte-1rzabue img.svelte-1rzabue{max-width:100%;height:auto;border-radius:8px;aspect-ratio:2/1;object-fit:cover}.info.svelte-1rzabue.svelte-1rzabue{margin-top:1rem}",
  map: null
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products = [
    {
      image: weldone,
      name: "Product 1",
      rating: 4.5,
      price: "$39.99"
    },
    {
      image: sand,
      name: "Product 2",
      rating: 3.8,
      price: "$49.99"
    },
    {
      image: chair,
      name: "Product 3",
      rating: 4.2,
      price: "$29.99"
    },
    {
      image: fork,
      name: "Product 4",
      rating: 4.7,
      price: "$59.99"
    }
  ];
  $$result.css.add(css);
  return ` <section class="container mx-auto"><div class="flex space-x-4 mt-8 px-4">  <div class="${["tab svelte-1rzabue", "active"].join(" ").trim()}" data-svelte-h="svelte-sy8pv7">Special Product</div>   <div class="${["tab svelte-1rzabue", ""].join(" ").trim()}" data-svelte-h="svelte-afjxex">Best Product</div>   <div class="${["tab svelte-1rzabue", ""].join(" ").trim()}" data-svelte-h="svelte-1sho1on">New Product</div></div> <div class="mt-8">${`<div class="grid svelte-1rzabue">${each(products, (product) => {
    return `<div class="card svelte-1rzabue"><img${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)} class="svelte-1rzabue"> <div class="info svelte-1rzabue"><h3>${escape(product.name)}</h3> <p>Rating: ${escape(product.rating)} stars</p> <p>Price: ${escape(product.price)}</p></div> </div>`;
  })}</div>`} ${``} ${``}</div> </section>`;
});
const Shoes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><section>${validate_component(Slide, "Slide").$$render($$result, {}, {}, {})}</section> ${validate_component(Cardshoe, "Cardshoe").$$render($$result, {}, {}, {})} ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {})} ${validate_component(Bags, "Bags").$$render($$result, {}, {}, {})} ${validate_component(Customer, "Customer").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { text: "Shoes", url: "#shoes" },
    { text: "Belt", url: "./shoes" },
    { text: "Wallet", url: "#bags" },
    { text: "Bag", url: "#bags" },
    { text: "Contact", url: "#ring" }
  ];
  return `<nav class="container mx-auto bg-black">${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})}</nav> <main>${validate_component(Shoes, "Shoes").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};

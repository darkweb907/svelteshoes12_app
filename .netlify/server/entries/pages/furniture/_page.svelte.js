import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const furnitureData = [
  { id: 1, name: "Sofa", imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  { id: 2, name: "leather sofa", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/03/WhatsApp-Image-2021-06-23-at-4.04.43-PM.jpeg" },
  { id: 2, name: "CONSOLE TABLE", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-08-at-2.17.54-PM-1.jpeg" },
  { id: 2, name: "Royal-Dining", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/03/06-Royal-Dining.jpg" },
  { id: 2, name: "Coworking Space", imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" },
  { id: 2, name: "Center table", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/09/Screenshot-2023-09-13-142050.png" },
  { id: 2, name: "Dinning Chair", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/03/fotor_2023-2-23_15_57_39-scaled-1.jpg" },
  { id: 2, name: "Bed Alex", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/05/Bed-305-2048x1366-1-600x600.png" },
  { id: 2, name: "Puff chair", imageUrl: "https://vavafurniture.com/wp-content/uploads/2023/03/PUFF-1-1-600x600.jpg" }
  // Add more furniture items
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".selected.svelte-1kom8q9{opacity:0.9}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedItem = null;
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
  return `  <section><nav class="container mx-auto bg-black">${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})}</nav> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mt-5 max-md:px-4">${each(furnitureData, (item) => {
    return `<div class="relative bg-white rounded-lg shadow-lg overflow-hidden"><img class="w-full h-auto transform scale-100 transition-transform duration-300 hover:scale-110 aspect-[4/3]"${add_attribute("src", `${item.imageUrl}`, 0)}${add_attribute("alt", item.name, 0)}> <div class="${[
      "absolute inset-0 flex items-center justify-center opacity-0 bg-black text-white hover:opacity-90 transition-opacity duration-300 svelte-1kom8q9",
      selectedItem === item ? "selected" : ""
    ].join(" ").trim()}"><h2 class="text-xl font-semibold">${escape(item.name)}</h2></div> </div>`;
  })}</div> </section>`;
});
export {
  Page as default
};

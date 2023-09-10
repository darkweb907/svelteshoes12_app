import { c as create_ssr_component, d as add_attribute, f as each, e as escape, h as null_to_empty } from "./ssr.js";
const logo = "/_app/immutable/assets/logo1.97a42822.png";
const navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mage.svelte-15863bp{flex:1}.link.svelte-15863bp{flex:3}#hi.svelte-15863bp{background-color:black}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links = [] } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css);
  return `  <nav class="bg-transparent py-3"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16 px-4"><div class="flex-shrink-0 mage svelte-15863bp" data-svelte-h="svelte-e7v6o8"><a href="/"><img class="my-5 w-1/3 md:w-1/3"${add_attribute("src", logo, 0)} alt="Logo"></a></div> <div class="hidden md:block link svelte-15863bp"><div class="flex items-baseline space-x-2 justify-end">${each(links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} class="px-2 py-2 rounded-md text-lg font-medium text-white hover:text-gray-300">${escape(link.text)} </a>`;
  })}</div></div> <div class="-mr-2 flex md:hidden"><button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" data-svelte-h="svelte-qe7cwb"><span class="sr-only">Open main menu</span>  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div> <div class="${escape(null_to_empty("hidden md:hidden"), true) + " svelte-15863bp"}" id="hi"><div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">${each(links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700">${escape(link.text)} </a>`;
  })}</div></div> </nav>`;
});
export {
  Navbar as N
};

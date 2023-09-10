import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</nav>`;
});
export {
  Page as default
};

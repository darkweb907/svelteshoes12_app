import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { text: "Segun Odumsu Band", url: "#main" },
    { text: "Jazzon Interior", url: "./about" },
    { text: "Leather Work", url: "#" }
  ];
  return `<nav>${validate_component(Navbar, "Navbar").$$render($$result, { links: navLinks }, {}, {})}</nav>`;
});
export {
  Page as default
};

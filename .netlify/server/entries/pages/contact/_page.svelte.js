import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let email = "";
  return `  <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-5"><div class="mb-4"><label class="block text-gray-600 text-sm font-medium mb-1" for="name" data-svelte-h="svelte-1k1nbv4">Name</label> <input class="w-full p-2 border rounded-md" type="text" id="name" required${add_attribute("value", name, 0)}></div> <div class="mb-4"><label class="block text-gray-600 text-sm font-medium mb-1" for="email" data-svelte-h="svelte-libfcs">Email</label> <input class="w-full p-2 border rounded-md" type="email" id="email" required${add_attribute("value", email, 0)}></div> <div class="mb-4"><label class="block text-gray-600 text-sm font-medium mb-1" for="message" data-svelte-h="svelte-12gelhm">Message</label> <textarea class="w-full p-2 border rounded-md" id="message" required>${escape("")}</textarea></div> <button class="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300" type="submit" data-svelte-h="svelte-1dy2y2v">Submit</button> ${``} ${``}</form>`;
});
export {
  Page as default
};

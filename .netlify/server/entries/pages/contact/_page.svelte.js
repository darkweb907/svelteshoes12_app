import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `  <main class="mx-auto max-w-screen-md p-4"><div class="bg-white shadow-md rounded-lg p-8"><h2 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-xw9y9w">Contact Us</h2> <form method="POST"><div class="mb-4" data-svelte-h="svelte-gggcp1"><label for="name" class="block text-gray-700">Name:</label> <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required></div> <div class="mb-4" data-svelte-h="svelte-3mturu"><label for="email" class="block text-gray-700">Email:</label> <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required></div> <div class="mb-4" data-svelte-h="svelte-d9t377"><label for="number" class="block text-gray-700">Number:</label> <input type="number" id="number" name="number" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required></div> <div class="mb-4" data-svelte-h="svelte-1040f3m"><label for="message" class="block text-gray-700">Message:</label> <textarea id="message" name="message" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required></textarea></div> <div class="mb-4" data-svelte-h="svelte-1dwwop6"><button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button></div> <p class="success">${escape(form?.success || "")}</p></form></div> </main>`;
});
export {
  Page as default
};

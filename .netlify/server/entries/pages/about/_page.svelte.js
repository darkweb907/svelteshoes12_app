import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../chunks/ssr.js";
const sand = "/_app/immutable/assets/segun5.012478d1.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let skills = [
    {
      name: "Shoe Making",
      description: "Shoe making is a creative and intricate craft that involves designing, crafting, and assembling footwear. It encompasses various stages, including pattern-making, cutting, stitching, and finishing. A skilled shoe maker can create unique and custom footwear, ranging from casual shoes to high-end leather boots."
    },
    {
      name: "Singing",
      description: "Singing is the art of producing musical sounds with the voice. It is a form of self-expression and communication through music. Singers use their vocal abilities to convey emotions, tell stories, and entertain audiences. Singing can take many forms, from solo performances to ensemble singing in choirs or bands."
    },
    {
      name: "Interior Design",
      description: "Interior design is the art and science of enhancing the interior spaces of homes, offices, or commercial establishments to create functional, aesthetically pleasing, and comfortable environments. Interior designers work with color palettes, furniture, decor, lighting, and spatial arrangements to transform spaces. They consider the needs and preferences of clients while adhering to design principles to create visually appealing and functional interiors."
    }
  ];
  return `  <section class="bg-gray-100 py-12"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="bg-white shadow-lg rounded-lg overflow-hidden"><div class="sm:flex sm:items-center px-6 py-4"><div class="sm:flex-shrink-0" data-svelte-h="svelte-m1acct"><img${add_attribute("src", sand, 0)} alt="Segun Odumosu" class="w-40 h-40 rounded-full mx-auto"></div> <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left"><h2 class="text-3xl font-semibold text-gray-800 mb-2" data-svelte-h="svelte-1fttxao">About Segun Odumosu</h2> <p class="text-gray-600 mb-4" data-svelte-h="svelte-1hhj0sq">Hi there! I&#39;m Segun Odumosu, and I&#39;m passionate about various creative pursuits. I have
						a deep love for crafting beautiful shoes, expressing my soul through singing, and
						enhancing spaces with my interior design skills.</p> ${each(skills, (skill) => {
    return `<div class="mb-6"><h3 class="text-xl font-semibold text-gray-800 mb-2">${escape(skill.name)}</h3> <p class="text-gray-600">${escape(skill.description)}</p> </div>`;
  })}</div></div></div></div></section>`;
});
export {
  Page as default
};



export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.b94c635f.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.10bba898.js","_app/immutable/chunks/navbar.d3c4b6d2.js","_app/immutable/chunks/each.4c609cfd.js"];
export const stylesheets = ["_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

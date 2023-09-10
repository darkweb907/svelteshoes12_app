

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.aaae775c.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.10bba898.js","_app/immutable/chunks/each.4c609cfd.js","_app/immutable/chunks/navbar.d3c4b6d2.js","_app/immutable/chunks/index.4db78ffb.js","_app/immutable/chunks/segun5.c24e2969.js"];
export const stylesheets = ["_app/immutable/assets/2.ca817e18.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

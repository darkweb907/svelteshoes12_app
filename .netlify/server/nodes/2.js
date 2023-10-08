

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.284fc807.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.8198b8b9.js","_app/immutable/chunks/each.9667216d.js","_app/immutable/chunks/navbar.abd2fc9d.js","_app/immutable/chunks/index.4db78ffb.js","_app/immutable/chunks/segun5.99b925dc.js"];
export const stylesheets = ["_app/immutable/assets/2.ca817e18.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

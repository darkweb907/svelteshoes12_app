

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.55106047.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.7be13786.js","_app/immutable/chunks/each.33e6364d.js","_app/immutable/chunks/segun5.99b925dc.js"];
export const stylesheets = [];
export const fonts = [];

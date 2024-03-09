

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.46ca0805.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.8198b8b9.js","_app/immutable/chunks/each.9667216d.js","_app/immutable/chunks/segun5.99b925dc.js"];
export const stylesheets = [];
export const fonts = [];

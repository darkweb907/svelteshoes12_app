

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.c393c29b.js","_app/immutable/chunks/scheduler.63616327.js","_app/immutable/chunks/index.1621c1b3.js","_app/immutable/chunks/each.e43bf0e6.js","_app/immutable/chunks/segun5.99b925dc.js"];
export const stylesheets = [];
export const fonts = [];

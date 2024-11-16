

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.6f694f0e.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js","_app/immutable/chunks/each.31724cbf.js","_app/immutable/chunks/segun5.99b925dc.js"];
export const stylesheets = [];
export const fonts = [];

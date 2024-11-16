

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4e077d25.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.a963745a.js","_app/immutable/chunks/each.1940db88.js","_app/immutable/chunks/segun5.99b925dc.js"];
export const stylesheets = [];
export const fonts = [];

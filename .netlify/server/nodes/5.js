

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/furniture/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.74e85c59.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.a963745a.js","_app/immutable/chunks/each.1940db88.js","_app/immutable/chunks/navbar.0a98456e.js"];
export const stylesheets = ["_app/immutable/assets/5.fcd764fa.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

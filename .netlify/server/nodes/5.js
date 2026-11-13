

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/furniture/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.6df15263.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.7be13786.js","_app/immutable/chunks/each.33e6364d.js","_app/immutable/chunks/navbar.c3bd4727.js"];
export const stylesheets = ["_app/immutable/assets/5.fcd764fa.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

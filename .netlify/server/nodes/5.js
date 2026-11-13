

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/furniture/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.54a46b18.js","_app/immutable/chunks/scheduler.63616327.js","_app/immutable/chunks/index.1621c1b3.js","_app/immutable/chunks/each.e43bf0e6.js","_app/immutable/chunks/navbar.79504a5c.js"];
export const stylesheets = ["_app/immutable/assets/5.fcd764fa.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];



export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/furniture/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.88a57d0d.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js","_app/immutable/chunks/each.31724cbf.js","_app/immutable/chunks/navbar.6a2d8ae0.js"];
export const stylesheets = ["_app/immutable/assets/5.fcd764fa.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

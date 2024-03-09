

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/furniture/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.cd8b35a1.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.8198b8b9.js","_app/immutable/chunks/each.9667216d.js","_app/immutable/chunks/navbar.abd2fc9d.js"];
export const stylesheets = ["_app/immutable/assets/5.fcd764fa.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];



export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.4ba499c2.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.8198b8b9.js","_app/immutable/chunks/each.9667216d.js","_app/immutable/chunks/navigation.cddb006c.js","_app/immutable/chunks/singletons.44bb770c.js"];
export const stylesheets = [];
export const fonts = [];

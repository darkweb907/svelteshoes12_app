

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a3e4db6a.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.8198b8b9.js","_app/immutable/chunks/stores.4eb4d519.js","_app/immutable/chunks/singletons.44bb770c.js"];
export const stylesheets = [];
export const fonts = [];

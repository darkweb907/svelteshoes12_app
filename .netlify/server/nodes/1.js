

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1b371201.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.a963745a.js","_app/immutable/chunks/stores.b62e3821.js","_app/immutable/chunks/singletons.8e7627d1.js"];
export const stylesheets = [];
export const fonts = [];



export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7a5c433c.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.7be13786.js","_app/immutable/chunks/stores.25b0c8bc.js","_app/immutable/chunks/singletons.a8a5e1a2.js"];
export const stylesheets = [];
export const fonts = [];

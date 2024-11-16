

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.83575fe9.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js","_app/immutable/chunks/stores.caf8b7ec.js","_app/immutable/chunks/singletons.24d87a66.js"];
export const stylesheets = [];
export const fonts = [];

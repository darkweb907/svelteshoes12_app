

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d8d27e95.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js","_app/immutable/chunks/stores.6d582010.js","_app/immutable/chunks/singletons.35a584a6.js"];
export const stylesheets = [];
export const fonts = [];

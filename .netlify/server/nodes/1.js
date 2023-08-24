

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a6e5b87f.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.e0b10333.js","_app/immutable/chunks/stores.ff3065c1.js","_app/immutable/chunks/singletons.95ea327e.js"];
export const stylesheets = [];
export const fonts = [];

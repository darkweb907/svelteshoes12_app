

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.78646ef9.js","_app/immutable/chunks/scheduler.63616327.js","_app/immutable/chunks/index.1621c1b3.js","_app/immutable/chunks/singletons.ed751529.js"];
export const stylesheets = [];
export const fonts = [];

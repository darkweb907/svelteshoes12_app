

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.c69932fe.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js","_app/immutable/chunks/each.31724cbf.js","_app/immutable/chunks/navigation.28038c60.js","_app/immutable/chunks/singletons.ccafeac3.js"];
export const stylesheets = [];
export const fonts = [];

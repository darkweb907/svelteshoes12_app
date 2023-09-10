

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.c179085a.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.10bba898.js"];
export const stylesheets = [];
export const fonts = [];

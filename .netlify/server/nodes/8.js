

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.160a2c8c.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.7be13786.js","_app/immutable/chunks/each.33e6364d.js","_app/immutable/chunks/navigation.0be6974d.js","_app/immutable/chunks/singletons.a8a5e1a2.js"];
export const stylesheets = [];
export const fonts = [];

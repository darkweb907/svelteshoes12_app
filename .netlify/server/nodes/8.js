

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.4596f252.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.a963745a.js","_app/immutable/chunks/each.1940db88.js","_app/immutable/chunks/navigation.f0cc89ee.js","_app/immutable/chunks/singletons.8e7627d1.js"];
export const stylesheets = [];
export const fonts = [];

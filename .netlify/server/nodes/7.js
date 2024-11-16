

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.bd75f4a4.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.a963745a.js","_app/immutable/chunks/footer.5732b155.js","_app/immutable/chunks/each.1940db88.js","_app/immutable/chunks/navigation.f0cc89ee.js","_app/immutable/chunks/singletons.8e7627d1.js","_app/immutable/chunks/navbar.0a98456e.js"];
export const stylesheets = ["_app/immutable/assets/7.ce8f4377.css","_app/immutable/assets/footer.8676f066.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

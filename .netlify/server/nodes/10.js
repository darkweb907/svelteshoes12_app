

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shoes/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.938662ca.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.a963745a.js","_app/immutable/chunks/navbar.0a98456e.js","_app/immutable/chunks/each.1940db88.js","_app/immutable/chunks/footer.5732b155.js","_app/immutable/chunks/index.4db78ffb.js"];
export const stylesheets = ["_app/immutable/assets/10.8ff376a6.css","_app/immutable/assets/navbar.b0901659.css","_app/immutable/assets/footer.8676f066.css"];
export const fonts = [];
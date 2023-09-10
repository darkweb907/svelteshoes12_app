

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.081f57bd.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.10bba898.js","_app/immutable/chunks/footer.f55e2f9d.js","_app/immutable/chunks/each.4c609cfd.js","_app/immutable/chunks/index.4db78ffb.js","_app/immutable/chunks/flute.5ac7b6e5.js","_app/immutable/chunks/navigation.13bd10ff.js","_app/immutable/chunks/singletons.73887d7d.js","_app/immutable/chunks/navbar.d3c4b6d2.js"];
export const stylesheets = ["_app/immutable/assets/6.3af6f09a.css","_app/immutable/assets/footer.fd02c637.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

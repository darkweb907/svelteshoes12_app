

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/interior/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5faa08d0.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.10bba898.js","_app/immutable/chunks/each.4c609cfd.js","_app/immutable/chunks/index.4db78ffb.js","_app/immutable/chunks/flute.5ac7b6e5.js","_app/immutable/chunks/footer.f55e2f9d.js","_app/immutable/chunks/navbar.d3c4b6d2.js"];
export const stylesheets = ["_app/immutable/assets/5.43c24129.css","_app/immutable/assets/footer.fd02c637.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

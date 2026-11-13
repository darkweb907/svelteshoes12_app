

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.6c5937ec.js","_app/immutable/chunks/scheduler.63616327.js","_app/immutable/chunks/index.1621c1b3.js","_app/immutable/chunks/footer.8e93cad3.js","_app/immutable/chunks/each.e43bf0e6.js","_app/immutable/chunks/music.4de1e90a.js","_app/immutable/chunks/navbar.79504a5c.js"];
export const stylesheets = ["_app/immutable/assets/footer.8676f066.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];



export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/interior/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.f6019705.js","_app/immutable/chunks/scheduler.63616327.js","_app/immutable/chunks/index.1621c1b3.js","_app/immutable/chunks/each.e43bf0e6.js","_app/immutable/chunks/index.8cb2a4d7.js","_app/immutable/chunks/footer.8e93cad3.js","_app/immutable/chunks/navbar.79504a5c.js"];
export const stylesheets = ["_app/immutable/assets/6.f3612066.css","_app/immutable/assets/footer.8676f066.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

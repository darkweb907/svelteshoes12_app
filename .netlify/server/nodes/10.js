

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shoes/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.fb3b59fc.js","_app/immutable/chunks/scheduler.63616327.js","_app/immutable/chunks/index.1621c1b3.js","_app/immutable/chunks/navbar.79504a5c.js","_app/immutable/chunks/each.e43bf0e6.js","_app/immutable/chunks/footer.8e93cad3.js","_app/immutable/chunks/index.8cb2a4d7.js"];
export const stylesheets = ["_app/immutable/assets/10.8ff376a6.css","_app/immutable/assets/navbar.b0901659.css","_app/immutable/assets/footer.8676f066.css"];
export const fonts = [];

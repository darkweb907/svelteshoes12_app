

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c56267ec.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js","_app/immutable/chunks/each.31724cbf.js","_app/immutable/chunks/navbar.6a2d8ae0.js","_app/immutable/chunks/index.4db78ffb.js","_app/immutable/chunks/segun5.99b925dc.js","_app/immutable/chunks/footer.f7b9defe.js"];
export const stylesheets = ["_app/immutable/assets/2.6183951b.css","_app/immutable/assets/navbar.b0901659.css","_app/immutable/assets/footer.8676f066.css"];
export const fonts = [];

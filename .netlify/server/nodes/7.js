

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.33b898d2.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js","_app/immutable/chunks/footer.f7b9defe.js","_app/immutable/chunks/each.31724cbf.js","_app/immutable/chunks/navigation.1d0a7428.js","_app/immutable/chunks/singletons.24d87a66.js","_app/immutable/chunks/navbar.6a2d8ae0.js"];
export const stylesheets = ["_app/immutable/assets/7.ce8f4377.css","_app/immutable/assets/footer.8676f066.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

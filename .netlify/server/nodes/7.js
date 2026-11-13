

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.b60e65b4.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.7be13786.js","_app/immutable/chunks/footer.bdb5b835.js","_app/immutable/chunks/each.33e6364d.js","_app/immutable/chunks/navigation.7b82b398.js","_app/immutable/chunks/singletons.85974782.js","_app/immutable/chunks/navbar.c3bd4727.js"];
export const stylesheets = ["_app/immutable/assets/7.ce8f4377.css","_app/immutable/assets/footer.8676f066.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

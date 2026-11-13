

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shoes/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.a659817a.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.7be13786.js","_app/immutable/chunks/navbar.c3bd4727.js","_app/immutable/chunks/each.33e6364d.js","_app/immutable/chunks/footer.bdb5b835.js","_app/immutable/chunks/index.8cb2a4d7.js"];
export const stylesheets = ["_app/immutable/assets/10.8ff376a6.css","_app/immutable/assets/navbar.b0901659.css","_app/immutable/assets/footer.8676f066.css"];
export const fonts = [];

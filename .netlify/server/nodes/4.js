

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/interior/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.daf0e24b.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.e0b10333.js","_app/immutable/chunks/each.38132e53.js","_app/immutable/chunks/sax2.3442363b.js","_app/immutable/chunks/footer.5917f21f.js"];
export const stylesheets = ["_app/immutable/assets/4.da46d8d1.css","_app/immutable/assets/sax2.ece7536c.css","_app/immutable/assets/footer.fd02c637.css"];
export const fonts = [];

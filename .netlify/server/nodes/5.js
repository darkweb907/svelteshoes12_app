

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.dec3d435.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.e0b10333.js","_app/immutable/chunks/footer.5917f21f.js","_app/immutable/chunks/each.38132e53.js","_app/immutable/chunks/sax2.3442363b.js","_app/immutable/chunks/band1.dfa58481.js","_app/immutable/chunks/navigation.d33a4636.js","_app/immutable/chunks/singletons.95ea327e.js"];
export const stylesheets = ["_app/immutable/assets/5.36b425f6.css","_app/immutable/assets/footer.fd02c637.css","_app/immutable/assets/sax2.ece7536c.css"];
export const fonts = [];

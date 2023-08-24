

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e2ba8350.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.e0b10333.js","_app/immutable/chunks/each.38132e53.js","_app/immutable/chunks/sax2.3442363b.js"];
export const stylesheets = ["_app/immutable/assets/2.7723cc75.css","_app/immutable/assets/sax2.ece7536c.css"];
export const fonts = [];

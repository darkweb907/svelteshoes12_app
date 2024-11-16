

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlists/_movie_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.f60066bf.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js","_app/immutable/chunks/each.31724cbf.js","_app/immutable/chunks/stores.caf8b7ec.js","_app/immutable/chunks/singletons.24d87a66.js"];
export const stylesheets = ["_app/immutable/assets/9.4633bdab.css"];
export const fonts = [];

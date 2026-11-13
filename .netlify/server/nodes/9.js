

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlists/_movie_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.300f35ae.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.7be13786.js","_app/immutable/chunks/each.33e6364d.js","_app/immutable/chunks/stores.25b0c8bc.js","_app/immutable/chunks/singletons.a8a5e1a2.js"];
export const stylesheets = ["_app/immutable/assets/9.4633bdab.css"];
export const fonts = [];

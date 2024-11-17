

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlists/_movie_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.51f78376.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js","_app/immutable/chunks/each.31724cbf.js","_app/immutable/chunks/stores.5e918f42.js","_app/immutable/chunks/singletons.ccafeac3.js"];
export const stylesheets = ["_app/immutable/assets/9.4633bdab.css"];
export const fonts = [];

import * as universal from '../entries/pages/playlists/_movie_/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlists/_movie_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/playlists/[movie]/+page.js";
export const imports = ["_app/immutable/nodes/9.6ec54505.js","_app/immutable/chunks/music.4de1e90a.js","_app/immutable/chunks/scheduler.63616327.js","_app/immutable/chunks/index.1621c1b3.js","_app/immutable/chunks/each.e43bf0e6.js"];
export const stylesheets = ["_app/immutable/assets/9.c4f68e51.css"];
export const fonts = [];

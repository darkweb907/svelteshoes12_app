

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlists/_movie_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.8f23323d.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.10bba898.js","_app/immutable/chunks/each.4c609cfd.js","_app/immutable/chunks/stores.721c70bc.js","_app/immutable/chunks/singletons.73887d7d.js"];
export const stylesheets = ["_app/immutable/assets/8.a1195efb.css"];
export const fonts = [];

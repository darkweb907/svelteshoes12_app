

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9d9a6866.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.10bba898.js","_app/immutable/chunks/stores.721c70bc.js","_app/immutable/chunks/singletons.73887d7d.js"];
export const stylesheets = [];
export const fonts = [];

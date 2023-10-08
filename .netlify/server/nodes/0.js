

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.141c5459.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.8198b8b9.js"];
export const stylesheets = ["_app/immutable/assets/0.2e18bfd8.css"];
export const fonts = [];

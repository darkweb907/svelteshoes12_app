

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.e7522c43.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.e0b10333.js"];
export const stylesheets = ["_app/immutable/assets/0.fc78ee65.css"];
export const fonts = [];

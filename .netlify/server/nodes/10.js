

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shoes/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.5eddc8e0.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.8198b8b9.js","_app/immutable/chunks/navbar.abd2fc9d.js","_app/immutable/chunks/each.9667216d.js","_app/immutable/chunks/footer.61e34a06.js","_app/immutable/chunks/index.4db78ffb.js"];
export const stylesheets = ["_app/immutable/assets/10.8ff376a6.css","_app/immutable/assets/navbar.b0901659.css","_app/immutable/assets/footer.8676f066.css"];
export const fonts = [];

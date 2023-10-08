

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.a8581004.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.8198b8b9.js","_app/immutable/chunks/footer.61e34a06.js","_app/immutable/chunks/each.9667216d.js","_app/immutable/chunks/navigation.cddb006c.js","_app/immutable/chunks/singletons.44bb770c.js","_app/immutable/chunks/navbar.abd2fc9d.js"];
export const stylesheets = ["_app/immutable/assets/7.ce8f4377.css","_app/immutable/assets/footer.8676f066.css","_app/immutable/assets/navbar.b0901659.css"];
export const fonts = [];

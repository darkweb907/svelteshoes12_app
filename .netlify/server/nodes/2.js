import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.bbc42971.js","_app/immutable/chunks/scheduler.63616327.js","_app/immutable/chunks/index.1621c1b3.js","_app/immutable/chunks/each.e43bf0e6.js","_app/immutable/chunks/navbar.79504a5c.js","_app/immutable/chunks/index.8cb2a4d7.js","_app/immutable/chunks/segun5.99b925dc.js","_app/immutable/chunks/footer.8e93cad3.js"];
export const stylesheets = ["_app/immutable/assets/2.6183951b.css","_app/immutable/assets/navbar.b0901659.css","_app/immutable/assets/footer.8676f066.css"];
export const fonts = [];

import * as server from '../entries/pages/contact/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/4.d90dcb59.js","_app/immutable/chunks/scheduler.7fe82760.js","_app/immutable/chunks/index.8198b8b9.js"];
export const stylesheets = [];
export const fonts = [];

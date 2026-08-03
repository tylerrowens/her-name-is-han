import * as server from '../entries/pages/stories/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stories/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/stories/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.CB6biKjC.js","_app/immutable/chunks/BZsOCkuN.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/M8Lnx-X1.js"];
export const stylesheets = [];
export const fonts = [];

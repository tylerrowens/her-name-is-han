import * as server from '../entries/pages/locations/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/locations/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/locations/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Ds4ayuCu.js","_app/immutable/chunks/BZsOCkuN.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = [];
export const fonts = [];

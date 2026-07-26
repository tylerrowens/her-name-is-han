

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/menu/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DbUbuKGR.js","_app/immutable/chunks/BZsOCkuN.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = [];
export const fonts = [];

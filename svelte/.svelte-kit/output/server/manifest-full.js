export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","fonts/.DS_Store","fonts/abcotto-regular.woff2","fonts/courier-new.woff2","fonts/fresco-stamp.woff2","fonts/sunbatang-medium.woff2","images/.DS_Store","images/article-1.jpg","images/article-2.jpg","images/article-3.jpg","images/article-4.jpg","images/article-5.jpg","images/blog-header-1.gif","images/blog-post-1.jpg","images/blog-post-2.jpg","images/blog-post-3.jpg","images/blog-post-4.jpg","images/blog-post-5.jpg","images/blog-post-6.jpg","images/conversations-1.jpg","images/conversations-2.jpg","images/conversations-3.jpg","images/export.gif","images/footer-background.jpg","robots.txt"]),
	mimeTypes: {".woff2":"font/woff2",".jpg":"image/jpeg",".gif":"image/gif",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CUEohPo_.js",app:"_app/immutable/entry/app.C8nTfdjA.js",imports:["_app/immutable/entry/start.CUEohPo_.js","_app/immutable/chunks/wv0F27LR.js","_app/immutable/chunks/BZsOCkuN.js","_app/immutable/entry/app.C8nTfdjA.js","_app/immutable/chunks/BZsOCkuN.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/locations",
				pattern: /^\/locations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/menu",
				pattern: /^\/menu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/shop/[handle]",
				pattern: /^\/shop\/([^/]+?)\/?$/,
				params: [{"name":"handle","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/stories",
				pattern: /^\/stories\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/stories/[slug]",
				pattern: /^\/stories\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["black1.ce38489c.jpg","black2.9b4dc263.webp","black2.ef5c8f15.jpg","black5.7e004a18.jpg","black6.49da0eb2.jpg","black7.293ed30d.webp","favicon.png","fi.5888898e.jpg","footer.8676f066.css","logo1.png","seg-1.168a4710.png","_layout.88a07a10.css","_layout.d9c762d1.css","_page.00616769.css","_page.4633bdab.css","_page.6183951b.css","_page.ce8f4377.css","_page.fcd764fa.css"]),
	mimeTypes: {".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.690ffd3b.js","app":"_app/immutable/entry/app.1bf7063c.js","imports":["_app/immutable/entry/start.690ffd3b.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/singletons.35a584a6.js","_app/immutable/entry/app.1bf7063c.js","_app/immutable/chunks/scheduler.71148fbc.js","_app/immutable/chunks/index.fe704e2f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js'))
		],
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
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/furniture",
				pattern: /^\/furniture\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/interior",
				pattern: /^\/interior\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/music",
				pattern: /^\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/playlists/[movie]",
				pattern: /^\/playlists\/([^/]+?)\/?$/,
				params: [{"name":"movie","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/playlist",
				pattern: /^\/playlist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/shoes",
				pattern: /^\/shoes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());

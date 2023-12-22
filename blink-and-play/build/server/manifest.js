const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.il9IPcQ6.js","app":"_app/immutable/entry/app.LbHXBKhu.js","imports":["_app/immutable/entry/start.il9IPcQ6.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/singletons.ZO2UNVfr.js","_app/immutable/entry/app.LbHXBKhu.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.exryL9J8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-jjA6rYXl.js')),
			__memo(() => import('./chunks/1-KhYH3BeM.js')),
			__memo(() => import('./chunks/2-cpDwzfXn.js')),
			__memo(() => import('./chunks/3-gBgVQbYK.js'))
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
				id: "/svelteroute",
				pattern: /^\/svelteroute\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

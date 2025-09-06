// 3) Create src/worker.js
// - Serves static files from /site via "Assets"
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    return env.ASSETS.fetch(request);
  },
};

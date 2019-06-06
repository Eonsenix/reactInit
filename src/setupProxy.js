const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/DLMiddleware_bs-controlle", {
      target: "https://m.bosera.com",
      changeOrigin: true
    })
  );
};
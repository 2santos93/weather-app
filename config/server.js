const fastify = require("fastify");
const routes = require("../routes/routes");

function build(opts = {}) {
  const app = fastify(opts);
  app.route(routes);

  return app;
}

module.exports = build;

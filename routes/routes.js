const { weather } = require("../controller/weather");

const routes = {
  url: "/weather",
  method: "GET",
  handler: weather,
};

module.exports = routes;

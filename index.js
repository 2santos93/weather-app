require('dotenv').config()
const server = require("./config/server")({
  logger: {
    level: "info",
    prettyPrint: true,
  },
});

server.listen(3000, (err) => {
  if (err) {
    process.exit(1);
  }
});
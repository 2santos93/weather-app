const { test } = require("tap");
const build = require("../config/server");

const app = build();

// TODO: The requests can be mock for better performance
test("should return isHigher", async (t) => {

  const response = await app.inject({
    method: "GET",
    url: "/weather",
    query: {
      city: "Rio Cuarto",
    },
  });

  const { statusCode, payload } = response;

  t.equal(statusCode, 200);
  t.equal(payload.includes("isHigher"), true);
});

test("should return city is required", async (t) => {
  const response = await app.inject({
    method: "GET",
    url: "/weather",
  });

  const { statusCode, payload } = response;

  const payloadJson = JSON.parse(payload);

  t.equal(statusCode, 400);
  t.equal('city is required', payloadJson.errorMsg);
});

test("should return city not found", async (t) => {
  const response = await app.inject({
    method: "GET",
    url: "/weather",
    query: {
      city: "nonExistCity",
    },
  });

  const { statusCode, payload } = response;

  const payloadJson = JSON.parse(payload);

  t.equal(400, statusCode);
  t.equal('city not found', payloadJson.errorMsg);
});

const { test } = require("tap");
const {isHigherThanLimit} = require('../../../helpers/weather');

test('should return false', async (t) => {
  t.equal(isHigherThanLimit(10), false);
})

test('should return true', async (t) => {
  t.equal(isHigherThanLimit(16), true);
})
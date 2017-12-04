const app = require("../app");
const assert = require("assert");

describe("orderArray", () => {
  it("takes an array or jumbled numbers and orders them, min to max", () => {
    assert.deepEqual(app.orderArray([4,2,7,1,5,9,3,8,6]), [1,2,3,4,5,6,7,8,9]);
  });
});

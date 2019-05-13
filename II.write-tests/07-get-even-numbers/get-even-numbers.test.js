var getEven = require("./get-even-numbers");

test("getting the even number", function() {
  var input = [22, 13, 73, 82, 4];
  var expected = [22, 82, 4];
  var results = getEven(input);
  expect(results).toEqual(expected);
});
// input: [22, 13, 73, 82, 4];
// example
// expected: [22, 82, 4];

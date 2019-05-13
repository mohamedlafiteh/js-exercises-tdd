var getLargestNumber = require("./largest-number");

test("geting the largest number", function() {
  var input = [3, 21, 88, 4, 36];
  var expects = 88;
  var results = getLargestNumber(input);
  expect(results).toEqual(expects);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

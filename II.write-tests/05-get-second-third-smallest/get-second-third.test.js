var findNumer = require("./get-second-third");
test("geting the second and third numbers", function() {
  var input = [90, 5, 11, 8, 6];
  var expects = [6, 8];
  var results = findNumer(input);
  expect(results).toEqual(expects);
});

// example

// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

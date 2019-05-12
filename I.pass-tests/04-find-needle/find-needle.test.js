var findNeedle = require("./find-needle/");
var findPlant = require("./find-needle/");
test("Find the needle", function() {
  var words = ["house", "train", "slide", "needle", "book"];
  var expected = 3;

  var output = findNeedle(words);
  expect(output).toEqual(expected);
});

test("Find the plant", function() {
  var words2 = ["plant", "shelf", "arrow", "bird"];
  var expected2 = 0;

  var output2 = findPlant(words2);
  expect(output2).toEqual(expected2);
});

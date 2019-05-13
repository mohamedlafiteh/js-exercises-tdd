var removeVowelsForWords = require("./remove-vowels-in-array.js");
test("remove vowels from all words in array", function() {
  // Arrange
  // Act
  // Assert
  expect(removeVowelsForWords(["Irina", "Etza", "Daniel"])).toEqual([
    "rn",
    "tz",
    "Dnl"
  ]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
//["Irn", "Etz", "Dnl"]

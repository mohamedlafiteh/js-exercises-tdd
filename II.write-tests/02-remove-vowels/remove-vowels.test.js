var removeVowels = require("./remove-vowels.js");
test("remove vowels from samuel", function() {
  // Arrange
  // Act
  // Assert
  expect(removeVowels("samuel")).toBe("sml");
  expect(removeVowels("codeyourfuture")).toBe("cdyrftr");
  expect(removeVowels("programming")).toBe("prgrmmng");
  expect(removeVowels("")).toBe("");
  expect(removeVowels(["Irina", "Etza", "Daniel"])).toEqual([
    "rn",
    "tz",
    "Dnl"
  ]);
});

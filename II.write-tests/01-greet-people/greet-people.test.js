var greetPeople = require("./greet-people.js");
test("print list of names prefixed with Hello", function() {
  // Arrange
  var mentors = ["Irina", "Ashleigh", "Etza"];
  // Act
  var result = greetPeople(mentors);
  // Assert
  expect(result).toBe("Hello Irina, Ashleigh, Etza");
});

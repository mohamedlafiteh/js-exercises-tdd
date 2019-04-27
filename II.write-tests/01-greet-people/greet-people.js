function greetPeople(people) {
  var greeting = "Hello ";

  people.forEach(function(person, index) {
    var lastElement = index === people.length - 1;
    if (lastElement) {
      greeting = greeting + "" + person;
    } else {
      greeting = greeting + "" + person + ", ";
    }
  });

  return greeting;
}
//Last elements index  = Length - 1
module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input
var mentors = ["Irina", "Ashleigh", "Etza"];
console.log(mentors.length);
var result = greetPeople(mentors);
  
*/

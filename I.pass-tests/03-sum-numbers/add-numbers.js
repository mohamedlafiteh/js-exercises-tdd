function addNumbers(numbers) {
  var sum = numbers.reduce(function(total, current) {
    return total + current;
  });
  return sum;
}
module.exports = addNumbers;

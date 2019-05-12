// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
module.exports = average;

function average(arr) {
  let count = 0;
  arr.reduce((x, y) => {
    if (+y) {
      count++;
      x += +y;
    } else {
      return x;
    }
  }, 0);
  return count;
}

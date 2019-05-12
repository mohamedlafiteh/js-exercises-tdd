module.exports = secondLargest;

function secondLargest(number) {
  return number.sort(function(a, b) {
    return b - a;
  })[1];
}

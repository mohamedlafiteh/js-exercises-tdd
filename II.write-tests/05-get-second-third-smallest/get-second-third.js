module.exports = function findNumber(array) {
  const newArray = array.slice();
  newArray.sort(function(x, y) {
    return x - y;
  });
  return [newArray[1], newArray[2]];
};

// var input = [90, 5, 11, 8, 6];
// var expects = [6, 8];

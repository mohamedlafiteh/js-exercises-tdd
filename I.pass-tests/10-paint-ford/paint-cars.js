module.exports = paintShop;

function paintShop(cars) {
  var allCars = "";
  var allCars1 = "";
  var allCars2 = "";
  var allCars3 = "";

  cars.forEach(function(object) {
    if (object.make === "Ford") {
      allCars = object;
    } else if (object.make === "Land Rover") {
      allCars1 = object;
    } else if (object.make === "Toyota") {
      allCars2 = object;
    } else if (object.make === "Honda") {
      allCars3 = object;
    }
  });
  var results = [allCars, allCars1, allCars2, allCars3];
  return results;
}

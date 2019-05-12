module.exports = sales;

function sales(carsSold) {
  var totalFordPrice = 0;
  var totalHondaPrice = 0;
  var totalLandRoverPrice = 0;
  var totalToyotaPrice = 0;
  carsSold.forEach(function(carObject) {
    if (carObject.make === "Ford") {
      totalFordPrice = totalFordPrice + carObject.price;
    } else if (carObject.make === "Honda") {
      totalHondaPrice = totalHondaPrice + carObject.price;
    } else if (carObject.make === "Land Rover") {
      totalLandRoverPrice = totalLandRoverPrice + carObject.price;
    } else if (carObject.make === "Toyota") {
      totalToyotaPrice = totalToyotaPrice + carObject.price;
    }
  });

  var result = {
    Ford: totalFordPrice,
    Honda: totalHondaPrice,
    "Land Rover": totalLandRoverPrice,
    Toyota: totalToyotaPrice
  };

  return result;
}

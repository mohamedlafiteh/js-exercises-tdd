module.exports = formatCities;

function formatCities(cityArray) {
  return cityArray.map(
    item => item.city + " is the capital of " + item.country
  );
}

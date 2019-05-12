function removeMiddle(item) {
  var remove = item.splice(2, 1);
  return remove;
}

module.exports = removeMiddle;

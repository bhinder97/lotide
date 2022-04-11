let middle = function(array) {
  let midElem = [];
  if (array.length % 2 === 0) {
    midElem.push(array[array.length / 2 -1]);
    midElem.push(array[array.length / 2]);
  }
  if (array.length % 2 === 1) {
    midElem.push(Math.ceil(array.length / 2));
  }
  return midElem;
}


module.exports = middle;
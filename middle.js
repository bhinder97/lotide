let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

let assertArraysEqual = function(arOne, arTwo) {
  if (eqArrays(arOne, arTwo) === true) {
    console.log(`✅✅✅Assertion Passed: ${arOne} ===  ${arTwo}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arOne} !== ${arTwo}`);
  }
} 

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


assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
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

assertArraysEqual([1, 2, 3], [1, 2, 3])
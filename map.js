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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) { //looping through the elements of the array
    results.push(callback(item)); //pushing the value into results
  }
  return results; //returning the value
};


const results1 = map(words, word => word[0]);
console.log(results1);


//TEST cases courtesy of matt
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
// assertArraysEqual(map([], word => word[0]), []);

module.exports = map;
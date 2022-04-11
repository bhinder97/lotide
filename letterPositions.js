const letterPositions = function(string) {
  let results = {}; //empty object

  for (let i = 0; i < string.length; i++) { //looping through the string
    if (string[i] !== " ") { //checks against spaces and if true goes to next condition
      if (results[string[i]]) { //
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  }
  return results;
};

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
};

// assertArraysEqual(s("lighthouse in the house"),{ 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// });


//console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;
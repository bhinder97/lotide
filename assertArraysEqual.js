const eqArrays = require("./eqArrays");

let assertArraysEqual = function(arOne, arTwo) {
  if (eqArrays(arOne, arTwo) === true) {
    console.log(`✅✅✅Assertion Passed: ${arOne} ===  ${arTwo}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arOne} !== ${arTwo}`);
  }
};

module.exports = assertArraysEqual;
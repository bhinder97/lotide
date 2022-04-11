// const assertEqual = require("../assertEqual");
// const tail = require("../tail");

// console.log(tail([5, 5, 5, 5, 5]));

// tail(words);
// assertEqual(words.length, 3);
// console.log(tail(words));


const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("should return [5, 5, 5, 5] for [5, 5, 5, 5, 5]", () => {
    assert.deepEqual(tail([5, 5, 5, 5, 5]), [5, 5, 5, 5]); //deep equal iterates into array and compares elements
  });
  it("should return ['Lighthouse', 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});
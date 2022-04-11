const assertEqual = require("../assertEqual");
const tail = require("../tail");

console.log(tail([5, 5, 5, 5, 5]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
console.log(tail(words));
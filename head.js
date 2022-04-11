const assertEqual = require('./assertEqual'); // ./ means current directory

const head = function(array) {
  let first = array[0];
  return first;
};

module.exports = head;

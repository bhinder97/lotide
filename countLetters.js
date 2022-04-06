const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let total = {};
  let lowerCaseString = string.toLowerCase();

  for (let letter of lowerCaseString) {
    if (letter !== " ") {
      total[letter] = total[letter] + 1 || 1;
    }
  }
  return total;
};

console.log(countLetters("LIGHTHOUSE IN THE HOUSE"));
console.log(countLetters("LIGHTHOUSE iN THE house"));
console.log(countLetters("My name is Harsimran Bhinder"));
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let keys of Object.keys(object1)) {
      if (Array.isArray(object1[keys])) {
        return eqArrays(object1[keys], object2[keys]);
      } else {
        if (object1[keys] !== object2[keys]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅✅✅Assertion Passed: ${inspect(obj1)} ===  ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};




// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

module.exports = assertObjectsEqual;
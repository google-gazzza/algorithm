// leetcode/medium/2700. Differences Between Two Objects
// 2700-differences-between-two-objects
// URL: https://leetcode.com/problems/differences-between-two-objects/description/

/**
 * @param {Object|Array} obj1
 * @param {Object|Array} obj2
 * @return {Object|Array}
 */

function isObjectType(obj) {
  return typeof obj === 'object' && Array.isArray(obj) === false;
}

function objDiff(obj1, obj2) {
  const diff = {};

  if (isObjectType(obj1) && !isObjectType(obj2)) {
    diff = [obj1, obj2];
  } else {
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        if (isObjectType(obj1[key]) && isObjectType(obj2[key])) {
          diff[key] = objDiff(obj1[key], obj2[key]);
        } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          diff[key] = objDiff(obj1[key], obj2[key]);
        } else if (obj2[key] !== undefined) {
          diff[key] = [obj1[key], obj2[key]];
        }

        if (diff[key] && Object.keys(diff[key]).length === 0) {
          delete diff[key];
        }
      }
    }
  }

  return diff;
}

a = { "a": { "b": 1 } };
b = { "a": [5] };
console.log(objDiff(a, b));

obj1 = {
  'a': 1,
  'v': 3,
  'x': [],
  'z': {
    'a': null,
  }
};

obj2 = {
  'a': 2,
  'v': 4,
  'x': [],
  'z': {
    'a': 2,
  },
};

console.log(objDiff(obj1, obj2));

obj1 = {};
obj2 = {
  'a': 1,
  'b': 2,
};
// console.log(objDiff(obj1, obj2));

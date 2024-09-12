/*
# leetcode/medium/2632. Curry
# 2632-curry
# URL: https://leetcode.com/problems/curry/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

function curry(fn: Function): Function {
  return function curried(...args: any[]) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...args2: any[]) {
      return curried(...args, ...args2);
    };
  };
};

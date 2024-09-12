/*
# leetcode/easy/2629. Function Composition
# 2629-function-composition
# URL: https://leetcode.com/problems/function-composition/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    return functions.reduceRight((acc, cur) => cur(acc), x);
  };
}

const f1 = (x: number) => x + 1;
const f2 = (x: number) => x * x;
const f3 = (x: number) => x * 2;

console.log(compose([f1, f2, f3])(4)
// 65

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

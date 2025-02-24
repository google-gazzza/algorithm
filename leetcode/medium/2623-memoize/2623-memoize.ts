// leetcode/medium/2623. Memoize
// 2623-memoize
// URL: https://leetcode.com/problems/memoize/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

/**
 * @param {Function} fn
 */

type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const hashMap = new Map();

  return function (...args: any): any {
    const key = args.join();
    if (hashMap.has(key)) {
      return hashMap.get(key);
    }

    const result = fn(...args);
    hashMap.set(key, result);

    return result;
  };
}

// /**
//  * let callCount = 0;
//  * const memoizedFn = memoize(function (a, b) {
//  *	 callCount += 1;
//  *   return a + b;
//  * })
//  * memoizedFn(2, 3) // 5
//  * memoizedFn(2, 3) // 5
//  * console.log(callCount) // 1
//  */
//  */

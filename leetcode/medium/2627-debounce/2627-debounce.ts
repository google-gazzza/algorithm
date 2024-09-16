// leetcode/medium/2627. Debounce
// 2627-debounce
// URL: https://leetcode.com/problems/debounce/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference
/**
 * @param {Function} fn
 */

type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let reservedEvent = setTimeout(() => null, 0);
  let lastTriggered = new Date();

  return function (...args) {
    const now = new Date();

    if (now.getTime() - lastTriggered.getTime() < t) {
      clearTimeout(reservedEvent);
    }

    lastTriggered = now;
    reservedEvent = setTimeout(() => fn(...args), t);
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

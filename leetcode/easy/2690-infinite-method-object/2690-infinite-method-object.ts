// leetcode/easy/2690. Infinite Method Object
// 2690-infinite-method-object
// URL: https://leetcode.com/problems/infinite-method-object/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function createInfiniteObject(): Record<string, () => string> {
  return new Proxy({}, {
    get: (target, prop) => {
      if (typeof prop === 'string') {
        return () => prop;
      }
    },
  });
}

/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */

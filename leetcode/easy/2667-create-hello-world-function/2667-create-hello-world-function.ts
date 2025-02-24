// leetcode/easy/2667. Create Hello World Function
// 2667-create-hello-world-function
// URL: https://leetcode.com/problems/create-hello-world-function/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function createHelloWorld() {
  return function (...args): string {
    return 'Hello World';
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

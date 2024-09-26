// leetcode/easy/2666. Allow One Function Call
// 2666-allow-one-function-call
// URL: https://leetcode.com/problems/allow-one-function-call/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

type Fn = (...args: any[]) => any;

function once(fn: Fn): Fn {
  this.called = false;

  return function (...args) {
    if (!this.called) {
      this.called = true;
      return fn(...args);
    }
    return undefined;
  };
}

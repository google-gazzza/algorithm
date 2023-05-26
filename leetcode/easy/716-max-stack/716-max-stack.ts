/*
716-max-stack
leetcode/easy/716. Max Stack
Difficulty: easy
URL: https://leetcode.com/problems/max-stack/

NOTE: Description

NOTE: Constraints
  - -107 <= x <= 107
  - At most 104 calls will be made to push, pop, top, peekMax, and popMax.
  - There will be at least one element in the stack when pop, top, peekMax, or popMax is called.

NOTE: Explanation
*/

class MaxStack {
  private max: number;

  private stack: number[];

  constructor() {
    this.max = Number.MIN_SAFE_INTEGER;
    this.stack = [];
  }

  push(x: number): void {
    this.max = Math.max(this.max, x);
    this.stack.push(x);
  }

  pop(): number {
    const result = this.stack.pop();
    this.max = Math.max(...this.stack);

    return result;
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  peekMax(): number {
    return this.max;
  }

  popMax(): number {
    const result = this.max;
    this.stack.splice(this.stack.lastIndexOf(this.max), 1);
    this.max = Math.max(...this.stack);

    return result;
  }
}

// Input
//   ["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
//   [[], [5], [1], [5], [], [], [], [], [], []]
// Output
//   [null, null, null, null, 5, 5, 1, 5, 1, 5]
//
// Explanation
// MaxStack;
const stk = new MaxStack();
stk.push(5);   // [5] the top of the stack and the maximum number is 5.
stk.push(1);   // [5, 1] the top of the stack is 1, but the maximum is 5.
stk.push(5);   // [5, 1, 5] the top of the stack is 5, which is also the maximum, because it is the top most one.
stk.top();     // return 5, [5, 1, 5] the stack did not change.
stk.popMax();  // return 5, [5, 1] the stack is changed now, and the top is different from the max.
stk.top();     // return 1, [5, 1] the stack did not change.
stk.peekMax(); // return 5, [5, 1] the stack did not change.
stk.pop();     // return 1, [5] the top of the stack and the max element is now 5.
stk.top();     // return 5, [5] the stack did not change.

/*
1381-design-a-stack-with-increment-operation
leetcode/medium/1381. Design a Stack With Increment Operation
URL: https://leetcode.com/problems/design-a-stack-with-increment-operation/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

class CustomStack {
  private stack: number[] = [];

  private stackSize: number;

  constructor(maxSize: number) {
    this.stackSize = maxSize;
  }

  push(x: number): void {
    if (this.stack.length < this.stackSize) {
      this.stack.push(x);
    }
  }

  pop(): number {
    if (this.stack.length > 0) {
      return this.stack.pop();
    }

    return -1;
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < k && i < this.stack.length; i += 1) {
      this.stack[i] += val;
    }
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

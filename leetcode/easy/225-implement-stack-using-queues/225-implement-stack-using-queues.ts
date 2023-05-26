/*
225-implement-stack-using-queues
leetcode/easy/225. Implement Stack using Queues
Difficulty: easy
URL: https://leetcode.com/problems/implement-stack-using-queues/
 */


class MyStack {
    private stack: number[];
  
    constructor() {
      this.stack = [];
    }
  
    push(x: number): void {
      this.stack.push(x);
    }
  
    pop(): number {
      return this.stack.pop();
    }
  
    top(): number {
      return this.stack[this.stack.length - 1];
    }
  
    empty(): boolean {
      return this.stack.length === 0;
    }
  }
  
  /**
   * Your MyStack object will be instantiated and called as such:
   * var obj = new MyStack()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.empty()
   */
  
  // Input
  //   ["MyStack", "push", "push", "top", "pop", "empty"]
  //   [[], [1], [2], [], [], []]
  // Output
  //   [null, null, null, 2, 2, false]
  
  // Explanation
  const myStack: MyStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  myStack.top(); // return 2
  myStack.pop(); // return 2
  myStack.empty(); // return False
  
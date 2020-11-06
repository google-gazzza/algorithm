// [Easy] 225. Implement Stack using Queues
// 225_implement_stack_using_queues

// https://leetcode.com/problems/implement-stack-using-queues
// Runtime: 84 ms, faster than 62.50% of TypeScript online submissions for Implement Stack using Queues.
// Memory Usage: 38.9 MB, less than 87.50% of TypeScript online submissions for Implement Stack using Queues.
class MyStack {
  private stack: number[]
  constructor () {
    this.stack = []
  }

  push (x: number): void {
    this.stack.push(x)
  }

  pop (): number {
    return this.stack.pop() || 0
  }

  top (): number {
    return this.stack[this.stack.length - 1]
  }

  empty (): boolean {
    return this.stack.length === 0
  }
}

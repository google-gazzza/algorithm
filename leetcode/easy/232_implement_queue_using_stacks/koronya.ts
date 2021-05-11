// [Easy] 232. Implement Queue using Stacks
// 232_implement_queue_using_stacks

// https://leetcode.com/problems/implement-queue-using-stacks
// Runtime: 76 ms, faster than 94.64% of TypeScript online submissions for Implement Queue using Stacks.
// Memory Usage: 38.8 MB, less than 96.43% of TypeScript online submissions for Implement Queue using Stacks.

class MyQueue {
  arr: number[]
  constructor() {
    this.arr = []
  }

  push(x: number): void {
    this.arr.push(x)
  }

  pop(): number {
    return this.arr.shift()!
  }

  peek(): number {
    return this.arr[0]
  }

  empty(): boolean {
    return this.arr.length === 0
  }
}

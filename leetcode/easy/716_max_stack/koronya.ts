// [Easy] 716. Max Stack
// 716_max_stack

// https://leetcode.com/problems/max-stack/
// Runtime: 210 ms, faster than 70.37% of TypeScript online submissions for Max Stack.
// Memory Usage: 50 MB, less than 44.44% of TypeScript online submissions for Max Stack.

class MaxStack {
  arr: number[]

  constructor() {
    this.arr = []
  }

  push(x: number): void {
    this.arr.push(x)
  }

  pop(): number {
    return this.arr.pop()
  }

  top(): number {
    return this.arr[this.arr.length - 1]
  }

  peekMax(): number {
    return Math.max(...this.arr)
  }

  popMax(): number {
    const max = Math.max(...this.arr)
    const lastMaxIndex = this.arr.lastIndexOf(max)
    return this.arr.splice(lastMaxIndex, 1)[0]
  }
}

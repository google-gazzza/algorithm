// [Medium] 622. Design Circular Queue
// 622_design_circular_queue

// https://leetcode.com/problems/design-circular-queue
// Runtime: 120 ms, faster than 95.65% of TypeScript online submissions for Design Circular Queue.
// Memory Usage: 46.9 MB, less than 21.74% of TypeScript online submissions for Design Circular Queue.

class MyCircularQueue {
  arr: number[]
  maxLength: number

  constructor(k: number) {
    this.arr = []
    this.maxLength = k
  }

  enQueue(value: number): boolean {
    if (this.arr.length < this.maxLength) {
      this.arr.push(value)
      return true
    }
    return false
  }

  deQueue(): boolean {
    if (this.isEmpty() === false) {
      this.arr.shift()
      return true
    }
    return false
  }

  Front(): number {
    return this.isEmpty() === false ? this.arr[0] : -1
  }

  Rear(): number {
    return this.isEmpty() === false ? this.arr[this.arr.length - 1] : -1
  }

  isEmpty(): boolean {
    return this.arr.length === 0
  }

  isFull(): boolean {
    return this.arr.length === this.maxLength
  }
}

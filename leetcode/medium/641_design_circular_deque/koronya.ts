// [Medium] 641. Design Circular Deque
// 641_design_circular_deque

// https://leetcode.com/problems/design-circular-deque
// Runtime: 120 ms, faster than 100.00% of TypeScript online submissions for Design Circular Deque.
// Memory Usage: 46.8 MB, less than 80.00% of TypeScript online submissions for Design Circular Deque.

class MyCircularDeque {
  arr: number[]
  maxLength: number
  constructor(k: number) {
    this.arr = []
    this.maxLength = k
  }

  insertFront(value: number): boolean {
    if (this.isFull() === true) {
      return false
    }
    this.arr.unshift(value)
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull() === true) {
      return false
    }
    this.arr.push(value)
    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty() === true) {
      return false
    }
    this.arr.shift()
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty() === true) {
      return false
    }
    this.arr.pop()
    return true
  }

  getFront(): number {
    return this.isEmpty() === true ? -1 : this.arr[0]
  }

  getRear(): number {
    return this.isEmpty() === true ? -1 : this.arr[this.arr.length - 1]
  }

  isEmpty(): boolean {
    return this.arr.length === 0
  }

  isFull(): boolean {
    return this.arr.length === this.maxLength
  }
}

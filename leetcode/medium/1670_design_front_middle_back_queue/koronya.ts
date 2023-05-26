// [Medium] 1670. Design Front Middle Back Queue
// 1670_design_front_middle_back_queue

// https://leetcode.com/problems/design-front-middle-back-queue
// Runtime: 124 ms, faster than 83.33% of TypeScript online submissions for Design Front Middle Back Queue.
// Memory Usage: 46.6 MB, less than 83.33% of TypeScript online submissions for Design Front Middle Back Queue.

class FrontMiddleBackQueue {
  arr: number[]
  constructor() {
    this.arr = []
  }

  pushFront(val: number): void {
    this.arr.unshift(val)
  }

  pushMiddle(val: number): void {
    this.arr.splice(Math.floor(this.arr.length / 2), 0, val)
  }

  pushBack(val: number): void {
    this.arr.push(val)
  }

  popFront(): number {
    return this.arr.length === 0 ? -1 : this.arr.shift()
  }

  popMiddle(): number {
    return this.arr.length === 0 ? -1 : this.arr.splice(Math.ceil(this.arr.length / 2) - 1, 1)[0]
  }

  popBack(): number {
    return this.arr.length === 0 ? -1 : this.arr.pop()
  }
}

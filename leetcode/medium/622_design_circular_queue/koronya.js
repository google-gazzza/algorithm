// [Medium] 622. Design Circular Queue
// 622_design_circular_queue

// https://leetcode.com/problems/design-circular-queue
// Runtime: 108 ms, faster than 99.60% of JavaScript online submissions for Design Circular Queue.
// Memory Usage: 45.4 MB, less than 54.00% of JavaScript online submissions for Design Circular Queue.

/**
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this.arr = []
  this.maxLength = k
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.arr.length < this.maxLength) {
    this.arr.push(value)
    return true
  }
  return false
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty() === false) {
    this.arr.shift()
    return true
  }
  return false
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() === false ? this.arr[0] : -1
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() === false ? this.arr[this.arr.length - 1] : -1
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.arr.length === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.arr.length === this.maxLength
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

const obj = new MyCircularQueue(3)
obj.enQueue(1) //?
obj.enQueue(2) //?
obj.enQueue(3) //?
obj.enQueue(4) //?
obj.Rear() //?
obj.isFull() //?
obj.deQueue() //?
obj.enQueue(4) //?
obj.Rear() //?

// const obj = new MyCircularQueue(8)
// obj.enQueue(3) //?
// obj.enQueue(9) //?
// obj.enQueue(5) //?
// obj.enQueue(0) //?
// obj.deQueue() //?
// obj.deQueue() //?
// obj.isEmpty() //?
// obj.isEmpty() //?
// obj.Rear() //?
// obj.Rear() //?
// obj.deQueue() //?

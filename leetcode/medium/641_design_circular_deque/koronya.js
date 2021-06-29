// [Medium] 641. Design Circular Deque
// 641_design_circular_deque

// https://leetcode.com/problems/design-circular-deque
// Runtime: 124 ms, faster than 83.33% of JavaScript online submissions for Design Circular Deque.
// Memory Usage: 46.6 MB, less than 30.95% of JavaScript online submissions for Design Circular Deque.

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
const MyCircularDeque = function (k) {
  this.arr = []
  this.maxLength = k
}

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull() === true) {
    return false
  }
  this.arr.unshift(value)
  return true
}

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull() === true) {
    return false
  }
  this.arr.push(value)
  return true
}

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty() === true) {
    return false
  }
  this.arr.shift()
  return true
}

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty() === true) {
    return false
  }
  this.arr.pop()
  return true
}

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.isEmpty() === true ? -1 : this.arr[0]
}

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.isEmpty() === true ? -1 : this.arr[this.arr.length - 1]
}

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.arr.length === 0
}

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.arr.length === this.maxLength
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

const circularDeque = new MycircularDeque(3) //?
circularDeque.insertLast(1) //?
circularDeque.insertLast(2) //?
circularDeque.insertFront(3) //?
circularDeque.insertFront(4) //?
circularDeque.getRear() //?
circularDeque.isFull() //?
circularDeque.deleteLast() //?
circularDeque.insertFront(4) //?
circularDeque.getFront() //?

// [Easy] 232. Implement Queue using Stacks
// 232_implement_queue_using_stacks

// https://leetcode.com/problems/implement-queue-using-stacks
// Runtime: 72 ms, faster than 87.00% of JavaScript online submissions for Implement Queue using Stacks.
// Memory Usage: 38.6 MB, less than 29.53% of JavaScript online submissions for Implement Queue using Stacks.

/**
 * Initialize your data structure here.
 */
const MyQueue = function () {
  this.arr = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.arr.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.arr.shift()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.arr[0]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.arr.length === 0
}

const myQueue = new MyQueue()
myQueue.push(1) //?
myQueue.push(2) //?
myQueue.peek() //?
myQueue.pop() //?
myQueue.empty() //?
console.log(myQueue.empty()) //?

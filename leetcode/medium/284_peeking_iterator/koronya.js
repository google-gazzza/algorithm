// [Medium] 284. Peeking Iterator
// 284_peeking_iterator

// https://leetcode.com/problems/peeking-iterator
// Runtime: 80 ms, faster than 62.32% of JavaScript online submissions for Peeking Iterator.
// Memory Usage: 38.4 MB, less than 100.00% of JavaScript online submissions for Peeking Iterator.

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
const PeekingIterator = function (iterator) {
  this.list = iterator
  this.top = iterator.next()
}

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (this.top !== null) {
    return this.top
  }
  if (this.list.hasNext() === true) {
    this.top = this.list.next()
    return this.top
  }
  return -1
}

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (this.top !== null) {
    const temp = this.top
    this.top = null
    return temp
  }
  return this.list.next()
}

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  if (this.top !== null) {
    return true
  }
  return this.list.hasNext()
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

// const obj = new PeekingIterator([1, 2, 3])
// const param_1 = obj.peek() //?
// const param_2 = obj.next() //?
// const param_3 = obj.hasNext() //?

const obj = new PeekingIterator([1, 2, 3])
obj.next() //?
obj.peek() //?
obj.next() //?
obj.next() //?
obj.hasNext() //?

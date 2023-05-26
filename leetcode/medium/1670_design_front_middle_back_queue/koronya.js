// [Medium] 1670. Design Front Middle Back Queue
// 1670_design_front_middle_back_queue

// https://leetcode.com/problems/design-front-middle-back-queue
// Runtime: 104 ms, faster than 100.00% of JavaScript online submissions for Design Front Middle Back Queue.
// Memory Usage: 46.3 MB, less than 55.17% of JavaScript online submissions for Design Front Middle Back Queue.

const FrontMiddleBackQueue = function () {
  this.arr = []
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.arr.unshift(val)
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  this.arr.splice(Math.floor(this.arr.length / 2), 0, val)
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.arr.push(val)
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  return this.arr.length === 0 ? -1 : this.arr.shift()
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  return this.arr.length === 0 ? -1 : this.arr.splice(Math.ceil(this.arr.length / 2) - 1, 1)[0]
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  return this.arr.length === 0 ? -1 : this.arr.pop()
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

const q = new FrontMiddleBackQueue()
q.pushFront(1) //?
q.pushBack(2) // [1, 2]
q.pushMiddle(3) // [1, 3, 2]
q.pushMiddle(4) // [1, 4, 3, 2]
q.popFront() //?
q.popMiddle() //?
q.popMiddle() //?
q.popBack() //?
q.popFront() //?

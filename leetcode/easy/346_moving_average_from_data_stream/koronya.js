// [Easy] 346. Moving Average from Data Stream
// 346_moving_average_from_data_stream

// https://leetcode.com/problems/moving-average-from-data-stream
// Runtime: 132 ms, faster than 50.37% of JavaScript online submissions for Moving Average from Data Stream.
// Memory Usage: 45.2 MB, less than 32.68% of JavaScript online submissions for Moving Average from Data Stream.

/**
 * @param {number} size
 */
const MovingAverage = function (size) {
  this.size = size
  this.arr = []
}

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.arr.length === this.size) {
    this.arr.shift()
  }
  this.arr.push(val)

  return this.arr.reduce((acc, cur) => acc + cur, 0) / this.arr.length
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

const obj = new MovingAverage(3)
obj.next(1) //?
obj.next(10) //?
obj.next(3) //?
obj.next(5) //?

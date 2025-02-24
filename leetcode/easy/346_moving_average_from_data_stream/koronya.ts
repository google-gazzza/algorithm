// [Easy] 346. Moving Average from Data Stream
// 346_moving_average_from_data_stream

// https://leetcode.com/problems/moving-average-from-data-stream
// Runtime: 132 ms, faster than 73.81% of TypeScript online submissions for Moving Average from Data Stream.
// Memory Usage: 46.4 MB, less than 26.19% of TypeScript online submissions for Moving Average from Data Stream.

class MovingAverage {
  size: number
  arr: number[]
  constructor(size: number) {
    this.size = size
    this.arr = []
  }

  next(val: number): number {
    if (this.arr.length === this.size) {
      this.arr.shift()
    }
    this.arr.push(val)

    return this.arr.reduce((acc, cur) => acc + cur, 0) / this.arr.length
  }
}

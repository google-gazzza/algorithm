// [Easy] 1656. Design an Ordered Stream
// 1656_design_an_ordered_stream

// https://leetcode.com/problems/design-an-ordered-stream
// Runtime: 180 ms, faster than 92.49% of JavaScript online submissions for Design an Ordered Stream.
// Memory Usage: 50.2 MB, less than 88.05% of JavaScript online submissions for Design an Ordered Stream.
const OrderedStream = function (n) {
  this.arr = Array.from({length: n})
  this.ptr = 0
}

OrderedStream.prototype.insert = function (id, value) {
  const insertIndex = id - 1
  this.arr[insertIndex] = value
  const chunkArr = []
  if (this.ptr === insertIndex) {
    while (this.arr[this.ptr] !== undefined) {
      chunkArr.push(this.arr[this.ptr])
      this.ptr += 1
    }
    return chunkArr
  } else {
    return []
  }
}

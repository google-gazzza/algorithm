// [Hard] 295. Find Median from Data Stream
// 295_find_median_from_data_stream

// https://leetcode.com/problems/find-median-from-data-stream
// Runtime: 2501 ms, faster than 13.95% of JavaScript online submissions for Find Median from Data Stream.
// Memory Usage: 91.9 MB, less than 16.02% of JavaScript online submissions for Find Median from Data Stream.

const insertionSort = (arr, insertNum) => {
  let index = -1
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const num = arr[i]
    if (insertNum <= num) {
      index = i
      break
    }
  }
  if (index === -1) {
    arr.push(insertNum)
  } else {
    arr.splice(index, 0, insertNum)
  }
}

const MedianFinder = function () {
  this.arr = []
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  insertionSort(this.arr, num)
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const arrLen = this.arr.length
  if (arrLen % 2 === 0) {
    return (this.arr[arrLen / 2 - 1] + this.arr[arrLen / 2]) / 2
  }
  return this.arr[Math.floor(arrLen / 2)]
}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// const mf = new MedianFinder()
// mf.addNum(1)
// mf.addNum(2)
// mf.findMedian() //?
// mf.addNum(3)
// mf.findMedian() //?

const mf = new MedianFinder()
mf.addNum(6)
mf.findMedian() //?
mf.addNum(10)
mf.findMedian() //?
mf.addNum(2)
mf.findMedian() //?
mf.addNum(6)
mf.findMedian() //?
mf.addNum(5)
mf.findMedian() //?
mf.addNum(0)
mf.findMedian() //?
mf.addNum(6)
mf.findMedian() //?
mf.addNum(3)
mf.findMedian() //?
mf.addNum(1)
mf.findMedian() //?
mf.addNum(0)
mf.findMedian() //?
mf.addNum(0)
mf.findMedian() //?

// [Hard] 295. Find Median from Data Stream
// 295_find_median_from_data_stream

// https://leetcode.com/problems/find-median-from-data-stream
// Runtime: 1979 ms, faster than 46.34% of TypeScript online submissions for Find Median from Data Stream.
// Memory Usage: 90.7 MB, less than 36.59% of TypeScript online submissions for Find Median from Data Stream.

const insertionSort = (arr: number[], insertNum: number) => {
  let index: number = -1
  const arrLen: number = arr.length
  for (let i: number = 0; i < arrLen; i += 1) {
    const num: number = arr[i]
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

class MedianFinder {
  arr: number[]
  constructor() {
    this.arr = []
  }

  addNum(num: number): void {
    insertionSort(this.arr, num)
  }

  findMedian(): number {
    const arrLen = this.arr.length
    if (arrLen % 2 === 0) {
      return (this.arr[arrLen / 2 - 1] + this.arr[arrLen / 2]) / 2
    }
    return this.arr[Math.floor(arrLen / 2)]
  }
}

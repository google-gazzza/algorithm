// [Easy] 703. Kth Largest Element in a Stream
// 703_kth_largest_element_in_a_stream

// https://leetcode.com/problems/kth-largest-element-in-a-stream
// Runtime: 184 ms, faster than 77.78% of TypeScript online submissions for Kth Largest Element in a Stream.
// Memory Usage: 47.3 MB, less than 22.22% of TypeScript online submissions for Kth Largest Element in a Stream.
const insertionSortToDescSortedArray = (val: number, arr: number[] = []): number[] => {
  const arrLen: number = arr.length
  for (let i: number = 0; i < arrLen; i += 1 || 0) {
    if (arr[i] <= val) {
      arr.splice(i, 0, val)
      return arr
    }
  }
  arr.push(val)
  return arr
}

const descSort = (a: number, b: number) => b - a
const getKthLargestVal = (arr: number[], k: number): number => arr[k - 1]

class KthLargest {
  private k: number
  private sortedArr: number[]
  constructor(k: number, nums: number[]) {
    this.k = k
    this.sortedArr = nums.sort(descSort)
  }

  add(val: number): number {
    this.sortedArr = insertionSortToDescSortedArray(val, this.sortedArr)
    return getKthLargestVal(this.sortedArr, this.k)
  }
}

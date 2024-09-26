// [Easy] 703. Kth Largest Element in a Stream
// 703_kth_largest_element_in_a_stream

// 정렬되어 있는 상태의 정렬에 추가할 때, insertionSort를 사용
// https://leetcode.com/problems/kth-largest-element-in-a-stream
// Runtime: 180 ms, faster than 65.17% of JavaScript online submissions for Kth Largest Element in a Stream.
// Memory Usage: 47 MB, less than 6.33% of JavaScript online submissions for Kth Largest Element in a Stream.
const insertionSortToDescSortedArray = (val, arr = []) => {
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    if (arr[i] <= val) {
      arr.splice(i, 0, val)
      return arr
    }
  }
  arr.push(val)
  return arr
}

const descSort = (a, b) => b - a
const getKthLargestVal = (arr, k) => arr[k - 1]

const KthLargest = function (k, nums) {
  this.k = k
  this.sortedArr = nums.sort(descSort)
}

KthLargest.prototype.add = function(val) {
  this.sortedArr = insertionSortToDescSortedArray(val, this.sortedArr)
  return getKthLargestVal(this.sortedArr, this.k)
}


// js 내장 sort 사용
// Runtime: 3296 ms, faster than 13.72% of JavaScript online submissions for Kth Largest Element in a Stream.
// Memory Usage: 53.2 MB, less than 6.33% of JavaScript online submissions for Kth Largest Element in a Stream.
const descSort2 = (a, b) => b - a
const getKthLargestVal2 = (arr, k) => arr[k - 1]

const KthLargest2 = function (k, nums) {
  this.k = k
  this.sortedArr = nums.sort(descSort2)
}

KthLargest.prototype.add = function(val) {
  this.sortedArr.push(val)
  this.sortedArr.sort(descSort2)
  return getKthLargestVal2(this.sortedArr, this.k)
}

// [Easy] 1089. Duplicate Zeros
// 1089_duplicate_zeros

// https://leetcode.com/problems/duplicate-zeros
// Runtime: 80 ms, faster than 98.55% of JavaScript online submissions for Duplicate Zeros.
// Memory Usage: 40.1 MB, less than 95.07% of JavaScript online submissions for Duplicate Zeros.

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
  const arrLen = arr.length
  let index = 0
  while (index < arrLen) {
    if (arr[index] === 0) {
      arr.splice(index, 0, 0)
      index += 2
    } else {
      index += 1
    }
  }
  arr.splice(arrLen)
}

// duplicateZeros([1, 0, 2, 3, 0, 5, 6, 7])
// duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])

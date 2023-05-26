// [Easy] 1089. Duplicate Zeros
// 1089_duplicate_zeros

// https://leetcode.com/problems/duplicate-zeros
// Runtime: 88 ms, faster than 95.38% of TypeScript online submissions for Duplicate Zeros.
// Memory Usage: 40.5 MB, less than 96.92% of TypeScript online submissions for Duplicate Zeros.

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  const arrLen: number = arr.length
  let index: number = 0
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

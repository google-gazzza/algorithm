// [Easy] 1646. Get Maximum in Generated Array
// 1646_get_maximum_in_generated_array

// https://leetcode.com/problems/get-maximum-in-generated-array
// Runtime: 76 ms, faster than 79.90% of JavaScript online submissions for Get Maximum in Generated Array.
// Memory Usage: 38.7 MB, less than 45.32% of JavaScript online submissions for Get Maximum in Generated Array.

/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = function (n) {
  if (n <= 1) {
    return n
  }
  const numArr = [0, 1]
  for (let i = 2; i <= n; i += 1 || 0) {
    const half = Math.floor(i / 2)
    if (i % 2 === 0) {
      numArr[i] = numArr[half]
    } else {
      numArr[i] = numArr[half] + numArr[half + 1]
    }
  }

  return Math.max(...numArr)
}

getMaximumGenerated(7) //?
getMaximumGenerated(2) //?
getMaximumGenerated(3) //?
getMaximumGenerated(0) //?
getMaximumGenerated(1) //?

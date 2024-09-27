// [Medium] 2091. Removing Minimum and Maximum From Array
// 2091_removing_minimum_and_maximum_from_array

// https://leetcode.com/problems/removing-minimum-and-maximum-from-array
// Runtime: 644 ms, faster than 5.39% of JavaScript online submissions for Removing Minimum and Maximum From Array.
// Memory Usage: 77.7 MB, less than 5.99% of JavaScript online submissions for Removing Minimum and Maximum From Array.

const getMinimumDeletion = (numA, numB, len) => {
  let min
  let max
  if (numA < numB) {
    min = numA
    max = numB
  } else {
    min = numB
    max = numA
  }
  const diffA = min + 1
  const diffB = len - max
  const diffC = max - min
  if (diffA < diffB) {
    return diffA + Math.min(diffC, diffB)
  }
  return diffB + Math.min(diffC, diffA)
}

// getMinimumDeletion(1, 5, 8)
// getMinimumDeletion(1, 6, 8)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeletions = function (nums) {
  const numsLen = nums.length
  const newNums = nums.map((num, index) => [num, index])
  newNums.sort((a, b) => a[0] - b[0])
  const minIndex = newNums[0][1]
  const maxIndex = newNums[numsLen - 1][1]

  return getMinimumDeletion(minIndex, maxIndex, numsLen)
}

// minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6])
// minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5])
// minimumDeletions([101])
// minimumDeletions([41, -47, -26, 57, 82, -23, 47, 52, 42, 79, 2, 77, 0, -4, 1, -99, -57, 72, -95])

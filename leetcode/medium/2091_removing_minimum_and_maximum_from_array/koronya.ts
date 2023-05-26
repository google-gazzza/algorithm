// [Medium] 2091. Removing Minimum and Maximum From Array
// 2091_removing_minimum_and_maximum_from_array

// https://leetcode.com/problems/removing-minimum-and-maximum-from-array
// Runtime: 666 ms, faster than 6.90% of TypeScript online submissions for Removing Minimum and Maximum From Array.
// Memory Usage: 92.5 MB, less than 10.34% of TypeScript online submissions for Removing Minimum and Maximum From Array.

const getMinimumDeletion = (numA: number, numB: number, len: number): number => {
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

function minimumDeletions(nums: number[]): number {
  const numsLen = nums.length
  const newNums = nums.map((num, index) => [num, index])
  newNums.sort((a, b) => a[0] - b[0])
  const minIndex = newNums[0][1]
  const maxIndex = newNums[numsLen - 1][1]

  return getMinimumDeletion(minIndex, maxIndex, numsLen)
}

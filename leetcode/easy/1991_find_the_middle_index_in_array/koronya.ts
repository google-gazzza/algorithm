// [Easy] 1991. Find the Middle Index in Array
// 1991_find_the_middle_index_in_array

// https://leetcode.com/problems/find-the-middle-index-in-array
// Runtime: 72 ms, faster than 100.00% of TypeScript online submissions for Find the Middle Index in Array.
// Memory Usage: 40.8 MB, less than 31.58% of TypeScript online submissions for Find the Middle Index in Array.

function findMiddleIndex(nums: number[]): number {
  const numsLen = nums.length
  const totalSum = nums.reduce((sum, cur) => sum + cur, 0)
  let leftSum: number = 0
  let rightSum = totalSum - nums[0]
  for (let i: number = 0; i < numsLen; i += 1 || 0) {
    if (leftSum === rightSum) {
      return i
    }
    leftSum += nums[i]
    rightSum -= nums[i + 1]
  }

  return -1
}

findMiddleIndex([2, 3, -1, 8, 4]) //?
// findMiddleIndex([1, -1, 4]) //?
// findMiddleIndex([2, 5]) //?
// findMiddleIndex([1]) //?

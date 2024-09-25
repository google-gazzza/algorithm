// [Medium] 2134. Minimum Swaps to Group All 1's Together II
// 2134_minimum_swaps_to_group_all_1's_together_ii

// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii
// Runtime: 161 ms, faster than 76.92% of TypeScript online submissions for Minimum Swaps to Group All 1's Together II.
// Memory Usage: 54.8 MB, less than 7.69% of TypeScript online submissions for Minimum Swaps to Group All 1's Together II.

function minSwaps(nums: number[]): number {
  const numsLen = nums.length
  const slideWindowSize = nums.filter((num) => num === 1).length
  let oneCount: number = 0
  for (let i: number = 0; i < slideWindowSize; i += 1) {
    if (nums[i] === 1) {
      oneCount += 1
    }
  }
  let max: number = oneCount

  for (let i: number = slideWindowSize; i < numsLen + slideWindowSize; i += 1) {
    const num = nums[i % numsLen]
    const removeNum = nums[(i - slideWindowSize) % numsLen]
    if (num === 1) {
      oneCount += 1
    }
    if (removeNum === 1) {
      oneCount -= 1
    }
    max = Math.max(max, oneCount)
  }

  return slideWindowSize - max
}

// [Medium] 2134. Minimum Swaps to Group All 1's Together II
// 2134_minimum_swaps_to_group_all_1's_together_ii

// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii
// Runtime: 124 ms, faster than 67.27% of JavaScript online submissions for Minimum Swaps to Group All 1's Together II.
// Memory Usage: 52.6 MB, less than 32.73% of JavaScript online submissions for Minimum Swaps to Group All 1's Together II.

const minSwaps = function (nums) {
  const numsLen = nums.length
  const slideWindowSize = nums.filter((num) => num === 1).length
  let oneCount = 0
  for (let i = 0; i < slideWindowSize; i += 1 || 0) {
    if (nums[i] === 1) {
      oneCount += 1
    }
  }
  let max = oneCount

  for (let i = slideWindowSize; i < numsLen + slideWindowSize; i += 1 || 0) {
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

// minSwaps([0, 1, 0, 1, 1, 0, 0]) === 1
// minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0]) === 2
// minSwaps([1, 1, 0, 0, 1]) === 0
// minSwaps([1, 1, 1, 1, 1]) === 0
// minSwaps([1, 1, 1, 0, 0, 0, 1, 1]) === 0
// minSwaps([1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]) === 1
// minSwaps([1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]) === 1
minSwaps([1, 1, 1, 0, 0, 1, 0, 1, 1, 0]) === 1

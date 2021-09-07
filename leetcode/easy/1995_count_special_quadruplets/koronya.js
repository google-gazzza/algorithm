// [Easy] 1995. Count Special Quadruplets
// 1995_count_special_quadruplets

// https://leetcode.com/problems/count-special-quadruplets
// Runtime: 160 ms, faster than 28.17% of JavaScript online submissions for Count Special Quadruplets.
// Memory Usage: 45 MB, less than 5.63% of JavaScript online submissions for Count Special Quadruplets.

/**
 * @param {number[]} nums
 * @return {number}
 */
const countQuadruplets = function (nums) {
  let count = 0
  const numsLen = nums.length
  const dfs = (arr, start) => {
    const arrLen = arr.length
    if (arrLen === 3) {
      const sum = arr.reduce((acc, cur) => acc + cur, 0)
      for (let i = start; i < numsLen; i += 1 || 0) {
        if (sum === nums[i]) {
          count += 1
        }
      }
    } else if (arrLen < 3) {
      for (let i = start; i < numsLen; i += 1 || 0) {
        dfs([...arr, nums[i]], i + 1)
      }
    }
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
    dfs([nums[i]], i + 1)
  }

  return count
}

countQuadruplets([1, 2, 3, 6]) //?
countQuadruplets([3, 3, 6, 4, 5]) //?
countQuadruplets([1, 1, 1, 3, 5]) //?
countQuadruplets([28, 8, 49, 85, 37, 90, 20, 8]) //?

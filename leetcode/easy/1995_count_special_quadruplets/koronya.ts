// [Easy] 1995. Count Special Quadruplets
// 1995_count_special_quadruplets

// https://leetcode.com/problems/count-special-quadruplets
// Runtime: 160 ms, faster than 53.85% of TypeScript online submissions for Count Special Quadruplets.
// Memory Usage: 45 MB, less than 7.69% of TypeScript online submissions for Count Special Quadruplets.

function countQuadruplets(nums: number[]): number {
  let count: number = 0
  const numsLen: number = nums.length
  const dfs = (arr: number[], start: number) => {
    const arrLen = arr.length
    if (arrLen === 3) {
      const sum: number = arr.reduce((acc, cur) => acc + cur, 0)
      for (let i: number = start; i < numsLen; i += 1) {
        if (sum === nums[i]) {
          count += 1
        }
      }
    } else if (arrLen < 3) {
      for (let i: number = start; i < numsLen; i += 1) {
        dfs([...arr, nums[i]], i + 1)
      }
    }
  }

  for (let i: number = 0; i < numsLen; i += 1) {
    dfs([nums[i]], i + 1)
  }

  return count
}

countQuadruplets([1, 2, 3, 6]) //?
countQuadruplets([3, 3, 6, 4, 5]) //?
countQuadruplets([1, 1, 1, 3, 5]) //?
countQuadruplets([28, 8, 49, 85, 37, 90, 20, 8]) //?

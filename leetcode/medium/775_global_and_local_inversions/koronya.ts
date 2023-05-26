// [Medium] 775. Global and Local Inversions
// 775_global_and_local_inversions

// https://leetcode.com/problems/global-and-local-inversions
// Runtime: 144 ms, faster than 46.15% of TypeScript online submissions for Global and Local Inversions.
// Memory Usage: 50.1 MB, less than 23.08% of TypeScript online submissions for Global and Local Inversions.

function isIdealPermutation(nums: number[]): boolean {
  const numsLen: number = nums.length
  for (let i: number = 0; i < numsLen; i += 1) {
    const diff: number = i - nums[i]
    if (diff > 1 || diff < -1) {
      return false
    }
  }
  return true
}

isIdealPermutation([1, 0, 2]) //?
isIdealPermutation([1, 2, 0]) //?

// [0, 1, 2, 3, 4, 5, 6, 7, 8]
// [5, 3, 2, 8, 7, 0, 1, 4, 6]

// [2, 1, 0, 3, 4]
// [1, 2, 0, 3, 4]

// [Medium] 413. Arithmetic Slices
// 413_arithmetic_slices

// https://leetcode.com/problems/arithmetic-slices
// Runtime: 88 ms, faster than 22.22% of TypeScript online submissions for Arithmetic Slices.
// Memory Usage: 40.1 MB, less than 11.11% of TypeScript online submissions for Arithmetic Slices.

function numberOfArithmeticSlices(nums: number[]): number {
  let count: number = 0
  const numsLen: number = nums.length

  const dfs = (arr: number[], next: number, diff: number | null) => {
    const arrLen: number = arr.length
    if (arrLen > 2) {
      count += 1
    }
    if (next >= numsLen) {
      return
    }

    const newNum: number = nums[next]
    const lastNum: number = arr[arrLen - 1]
    const newDiff: number = newNum - lastNum
    if (arrLen > 1 && diff !== newDiff) {
      return
    }
    dfs([...arr, newNum], next + 1, newDiff)
  }

  for (let i: number = 0; i < numsLen - 2; i += 1) {
    dfs([nums[i]], i + 1, null)
  }

  return count
}

// numberOfArithmeticSlices([1, 2, 3, 4]) //?
numberOfArithmeticSlices([1, 2, 3, 4, 5]) //?

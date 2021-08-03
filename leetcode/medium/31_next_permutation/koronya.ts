// [Medium] 31. Next Permutation
// 31_next_permutation

// https://leetcode.com/problems/next-permutation
// Runtime: 84 ms, faster than 92.31% of TypeScript online submissions for Next Permutation.
// Memory Usage: 41.1 MB, less than 28.85% of TypeScript online submissions for Next Permutation.

const swapArr = (arr: number[], a: number, b: number) => ([arr[a], arr[b]] = [arr[b], arr[a]])

function nextPermutation(nums: number[]): void {
  const numsLen: number = nums.length
  let prev: number = nums[numsLen - 1]
  let targetIndex: number = -1
  for (let i: number = numsLen - 2; i >= 0; i -= 1) {
    const now: number = nums[i]
    if (now < prev) {
      targetIndex = i
      break
    }
    prev = now
  }
  if (targetIndex === -1) {
    nums.reverse()
    return
  }

  let nextLargeIndex: number = -1
  for (let i: number = numsLen - 1; i >= targetIndex; i -= 1) {
    if (nums[i] > nums[targetIndex]) {
      nextLargeIndex = i
      break
    }
  }
  swapArr(nums, targetIndex, nextLargeIndex)
  let start: number = targetIndex + 1
  let end: number = numsLen - 1
  while (start < end) {
    swapArr(nums, start, end)
    start += 1
    end -= 1
  }

  return
}

nextPermutation([1, 2, 3, 1]) //?
nextPermutation([1, 2, 3]) //?
nextPermutation([3, 2, 1]) //?
nextPermutation([1, 1, 5]) //?
nextPermutation([1]) //?
nextPermutation([1, 3, 2, 1]) //?

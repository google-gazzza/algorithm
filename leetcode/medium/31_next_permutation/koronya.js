// [Medium] 31. Next Permutation
// 31_next_permutation

// https://leetcode.com/problems/next-permutation
// Runtime: 72 ms, faster than 97.23% of JavaScript online submissions for Next Permutation.
// Memory Usage: 40.4 MB, less than 65.67% of JavaScript online submissions for Next Permutation.

const swapArr = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  const numsLen = nums.length
  let prev = nums[numsLen - 1]
  let targetIndex = -1
  for (let i = numsLen - 2; i >= 0; i -= 1 || 0) {
    const now = nums[i]
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

  let nextLargeIndex = -1
  for (let i = numsLen - 1; i >= targetIndex; i -= 1 || 0) {
    if (nums[i] > nums[targetIndex]) {
      nextLargeIndex = i
      break
    }
  }
  swapArr(nums, targetIndex, nextLargeIndex)
  let start = targetIndex + 1
  let end = numsLen - 1
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


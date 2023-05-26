// [Medium] 189. Rotate Array
// 189_rotate_array

// https://leetcode.com/problems/rotate-array
// Runtime: 116 ms, faster than 91.09% of TypeScript online submissions for Rotate Array.
// Memory Usage: 52.5 MB, less than 5.67% of TypeScript online submissions for Rotate Array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const numsLen: number = nums.length
  const getSwitchIndex = (index: number): number => (index + k) % numsLen
  let count: number = 0
  let startIndex: number = 0
  while (count < numsLen) {
    let [current, prev] = [startIndex, nums[startIndex]]
    do {
      current = getSwitchIndex(current)
      ;[nums[current], prev] = [prev, nums[current]]
      count += 1
    } while (current !== startIndex)
    startIndex += 1
  }
}
// const rotate = function (nums, k) {
//   const numsLen = nums.length
//   const adjustK = k % numsLen
//   const after = nums.splice(nums.length - adjustK, adjustK)
//   after.reverse().forEach((num) => nums.unshift(num))
// }

// rotate([1, 2, 3, 4, 5, 6, 7], 3) //?
rotate([-1, -100, 3, 99], 2) //?
// rotate([1, 2], 5) //?

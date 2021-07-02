// [Medium] 189. Rotate Array
// 189_rotate_array

// https://leetcode.com/problems/rotate-array
// Runtime: 124 ms, faster than 33.30% of JavaScript online submissions for Rotate Array.
// Memory Usage: 49.8 MB, less than 11.80% of JavaScript online submissions for Rotate Array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const numsLen = nums.length
  const getSwitchIndex = (index) => (index + k) % numsLen
  let count = 0
  let startIndex = 0
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
// const rotate2 = function (nums, k) {
//   const numsLen = nums.length
//   const adjustK = k % numsLen
//   const after = nums.splice(nums.length - adjustK, adjustK)
//   after.reverse().forEach((num) => nums.unshift(num))
// }

// rotate([1, 2, 3, 4, 5, 6, 7], 3) //?
rotate([-1, -100, 3, 99], 2) //?
// rotate([1, 2], 5) //?

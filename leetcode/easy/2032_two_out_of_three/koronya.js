// [Easy] 2032. Two Out of Three
// 2032_two_out_of_three

// https://leetcode.com/problems/two-out-of-three
// Runtime: 80 ms, faster than 98.85% of JavaScript online submissions for Two Out of Three.
// Memory Usage: 42.5 MB, less than 40.83% of JavaScript online submissions for Two Out of Three.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
const twoOutOfThree = function (nums1, nums2, nums3) {
  const resultSet = new Set()
  const numSet = new Set()
  const candidates = [[...new Set(nums1)], [...new Set(nums2)], [...new Set(nums3)]]
  candidates.forEach((candidate) =>
    candidate.forEach((num) => {
      if (numSet.has(num) === true && resultSet.has(num) === false) {
        resultSet.add(num)
      } else {
        numSet.add(num)
      }
    }),
  )
  return [...resultSet]
}

twoOutOfThree([1, 1, 3, 2], [2, 3], [3]) //?
twoOutOfThree([3, 1], [2, 3], [1, 2]) //?
twoOutOfThree([1, 2, 2], [4, 3, 3], [5]) //?

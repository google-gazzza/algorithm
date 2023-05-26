// [Easy] 2215. Find the Difference of Two Arrays
// 2215_find_the_difference_of_two_arrays

// https://leetcode.com/problems/find-the-difference-of-two-arrays
// Runtime: 133 ms, faster than 72.54% of JavaScript online submissions for Find the Difference of Two Arrays.
// Memory Usage: 48.9 MB, less than 48.70% of JavaScript online submissions for Find the Difference of Two Arrays.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1)
  const nums2Set = new Set(nums2)
  const arr1 = []
  const arr2 = []
  for (const num of nums1Set) {
    if (nums2Set.has(num) === false) {
      arr1.push(num)
    }
  }
  for (const num of nums2Set) {
    if (nums1Set.has(num) === false) {
      arr2.push(num)
    }
  }

  return [arr1, arr2]
}

// findDifference([1, 2, 3], [2, 4, 6])
// findDifference([1, 2, 3, 3], [1, 1, 2, 2])
findDifference([1, 2, 3], [2, 4, 6])

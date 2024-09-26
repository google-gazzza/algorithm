// [Easy] 2215. Find the Difference of Two Arrays
// 2215_find_the_difference_of_two_arrays

// https://leetcode.com/problems/find-the-difference-of-two-arrays
// Runtime: 165 ms, faster than 58.70% of TypeScript online submissions for Find the Difference of Two Arrays.
// Memory Usage: 50 MB, less than 17.39% of TypeScript online submissions for Find the Difference of Two Arrays.

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const nums1Set = new Set<number>(nums1)
  const nums2Set = new Set<number>(nums2)
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

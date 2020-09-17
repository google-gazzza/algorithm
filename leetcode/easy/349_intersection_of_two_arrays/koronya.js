// [Easy] 349. Intersection of Two Arrays
// 349_intersection_of_two_arrays

// https://leetcode.com/problems/intersection-of-two-arrays
// Runtime: 76 ms, faster than 79.14% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 37 MB, less than 86.49% of JavaScript online submissions for Intersection of Two Arrays.
const intersection = (nums1, nums2) => {
  const resultSet = new Set()
  const numSet = new Set()
  nums1.forEach(num => numSet.add(num))
  nums2.forEach(num => numSet.has(num) && resultSet.add(num))

  return [...resultSet]
}

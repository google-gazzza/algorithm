// [Easy] 2248. Intersection of Multiple Arrays
// 2248_intersection_of_multiple_arrays

// https://leetcode.com/problems/intersection-of-multiple-arrays
// Runtime: 90 ms, faster than 100.00% of TypeScript online submissions for Intersection of Multiple Arrays.
// Memory Usage: 45.1 MB, less than 100.00% of TypeScript online submissions for Intersection of Multiple Arrays.

function intersection(nums: number[][]): number[] {
  return nums
    .reduce((acc, cur) => {
      return cur.filter((num) => acc.includes(num))
    }, nums[0])
    .sort((a, b) => a - b)
}

intersection([
  [3, 1, 2, 4, 5],
  [1, 2, 3, 4],
  [3, 4, 5, 6],
])

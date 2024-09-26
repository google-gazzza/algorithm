// [Easy] 2248. Intersection of Multiple Arrays
// 2248_intersection_of_multiple_arrays

// https://leetcode.com/problems/intersection-of-multiple-arrays
// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Intersection of Multiple Arrays.
// Memory Usage: 44.1 MB, less than 100.00% of JavaScript online submissions for Intersection of Multiple Arrays.

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const intersection = function (nums) {
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

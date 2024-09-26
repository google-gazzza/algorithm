// [Medium] 658. Find K Closest Elements
// 658_find_k_closest_elements

// https://leetcode.com/problems/find-k-closest-elements
// Runtime: 118 ms, faster than 64.20% of JavaScript online submissions for Find K Closest Elements.
// Memory Usage: 49.4 MB, less than 37.87% of JavaScript online submissions for Find K Closest Elements.

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function (arr, k, x) {
  const resultArr = arr
    .map((num) => ({ num, diff: x - num, diffAbs: Math.abs(x - num) }))
    .sort((a, b) => (a.diffAbs !== b.diffAbs ? a.diffAbs - b.diffAbs : b.diff - a.diff))

  return resultArr
    .slice(0, k)
    .map((item) => item.num)
    .sort((a, b) => a - b)
}

findClosestElements([1, 2, 3, 4, 5], 4, 3)
findClosestElements([1, 2, 3, 4, 5], 4, -1)

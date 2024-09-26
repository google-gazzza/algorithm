// [Medium] 658. Find K Closest Elements
// 658_find_k_closest_elements

// https://leetcode.com/problems/find-k-closest-elements
// Runtime: 104 ms, faster than 79.55% of TypeScript online submissions for Find K Closest Elements.
// Memory Usage: 49.5 MB, less than 34.09% of TypeScript online submissions for Find K Closest Elements.

function findClosestElements(arr: number[], k: number, x: number): number[] {
  const resultArr = arr
    .map((num) => ({ num, diff: x - num, diffAbs: Math.abs(x - num) }))
    .sort((a, b) => (a.diffAbs !== b.diffAbs ? a.diffAbs - b.diffAbs : b.diff - a.diff))

  return resultArr
    .slice(0, k)
    .map((item) => item.num)
    .sort((a, b) => a - b)
}

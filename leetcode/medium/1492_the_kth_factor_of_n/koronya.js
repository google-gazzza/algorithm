// [Medium] 1492. The kth Factor of n
// 1492_the_kth_factor_of_n

// https://leetcode.com/problems/the-kth-factor-of-n
// Runtime: 76 ms, faster than 88.89% of JavaScript online submissions for The kth Factor of n.
// Memory Usage: 38.5 MB, less than 81.11% of JavaScript online submissions for The kth Factor of n.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = function (n, k) {
  let count = 0
  for (let i = 1; i <= n; i += 1 || 0) {
    if (n % i === 0) {
      count += 1
      if (count === k) {
        return i
      }
    }
  }

  return -1
}

kthFactor(12, 3) //?
kthFactor(7, 2) //?
kthFactor(4, 4) //?
kthFactor(1, 1) //?
kthFactor(1000, 3) //?

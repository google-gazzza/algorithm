// [Medium] 1492. The kth Factor of n
// 1492_the_kth_factor_of_n

// https://leetcode.com/problems/the-kth-factor-of-n
// Runtime: 80 ms, faster than 86.67% of TypeScript online submissions for The kth Factor of n.
// Memory Usage: 40.2 MB, less than 66.67% of TypeScript online submissions for The kth Factor of n.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function kthFactor(n: number, k: number): number {
  let count: number = 0
  for (let i: number = 1; i <= n; i += 1) {
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

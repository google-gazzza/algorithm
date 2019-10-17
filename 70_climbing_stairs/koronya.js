// https://leetcode.com/problems/climbing-stairs/
// Runtime: 44 ms, faster than 96.78% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 33.9 MB, less than 32.00% of JavaScript online submissions for Climbing Stairs.

/**
 * nCr = nC(n-r)
 * k는 r과 (n-r)중 작은 값
 * nCr = n * (n-1) * ... * (n-k+1) / k!
 */
const getNCombinationR = (n, r) => {
  const k = n - r < r
    ? n - r
    : r
  let childMultiply = 1
  let parentMultiply = 1
  for (let i = 0; i < k ; i += 1) {
    childMultiply *= (n - i)
  }
  for (let i = 0; i < k ; i += 1) {
    parentMultiply *= (1 + i)
  }
  return childMultiply / parentMultiply
}

/**
 * n을 몇개의 2로 나타낼 수 있는지에 따라서, 2가
 * 0개일 때 경우의 수   : 1
 * 1개일 때 경우의 수   : n-1 Combination 1
 * ...
 * k개 일 때 경우의 수  : n-k Combination k
 * 위 모든 경우의 수의 합을 구하기
 */
const climbStairs = (n) => {
  const len = Math.floor(n/2) + 1
  let sum = 0
  for (let i = 0; i < len; i += 1) {
    sum += getNCombinationR(n-i, i)
  }
  return sum
}
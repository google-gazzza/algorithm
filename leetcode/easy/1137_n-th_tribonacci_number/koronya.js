// https://leetcode.com/problems/n-th-tribonacci-number
// Runtime: 52 ms, faster than 68.17% of JavaScript online submissions for N-th Tribonacci Number.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for N-th Tribonacci Number.

const fibMap = new Map()
fibMap.set(0, 0)
fibMap.set(1, 1)
fibMap.set(2, 1)

const tribonacci = N => {
  if (fibMap.has(N)) {
    return fibMap.get(N)
  }
  const result = tribonacci(N - 3) + tribonacci(N - 2) + tribonacci(N - 1)
  fibMap.set(N, result)
  return result
}

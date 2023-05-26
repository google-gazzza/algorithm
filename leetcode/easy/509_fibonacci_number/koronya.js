// https://leetcode.com/problems/fibonacci-number/
// with memoization
// Runtime: 44 ms, faster than 97.74% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 33.8 MB, less than 72.73% of JavaScript online submissions for Fibonacci Number.
const fibMap = new Map()
fibMap.set(0, 0)
fibMap.set(1, 1)
const fib = N => {
  if (fibMap.has(N)) {
    return fibMap.get(N)
  }
  const result = fib(N - 2) + fib(N - 1)
  fibMap.set(N, result)
  return result
}

// without memoization
// Runtime: 68 ms, faster than 38.39% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 34.3 MB, less than 9.09% of JavaScript online submissions for Fibonacci Number
const fib2 = N => {
  if (N === 0) {
    return 0
  }
  if (N === 1) {
    return 1
  }

  return fib(N - 2) + fib(N - 1)
}

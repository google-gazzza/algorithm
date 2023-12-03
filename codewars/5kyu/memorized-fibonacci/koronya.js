// [JS][5kyu] Memoized Fibonacci
// memoized-fibonacci
// https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

const fiboMap = new Map()

const fibonacci = (n) => {
  if (fiboMap.has(n)) {
    return fiboMap.get(n)
  }
  if (n < 2) {
    return n
  }
  const result = fibonacci(n - 1) + fibonacci(n - 2)
  fiboMap.set(n, result)
  return result
}

fibonacci(0) === 0
fibonacci(1) === 1
fibonacci(5) === 5
fibonacci(10) === 55
fibonacci(15) === 610
fibonacci(20) === 6765

fibonacci(50) === 12586269025
fibonacci(60) === 1548008755920
fibonacci(70) === 190392490709135

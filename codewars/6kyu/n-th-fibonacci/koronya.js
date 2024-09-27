// [JS][6kyu] N-th Fibonacci
// n-th-fibonacci
// https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

const fiboMap = new Map()
fiboMap.set(1, 0)
fiboMap.set(2, 1)

const nthFibo = (n) => {
  if (fiboMap.has(n) === true) {
    return fiboMap.get(n)
  }

  const sum = nthFibo(n - 2) + nthFibo(n - 1)
  fiboMap.set(n, sum)
  return sum
}

nthFibo(4)
nthFibo(5)
nthFibo(10)

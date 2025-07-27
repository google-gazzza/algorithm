// [JS][5kyu] Fibonacci Factory Function
// fibonacci-factory-function
// https://www.codewars.com/kata/522498c9906b0cfcb40001fc/train/javascript

const genfib = () => {
  const fibMap = new Map([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [8, 21],
    [9, 34],
    [10, 55],
  ])
  let lastIndex = -1
  return function fib() {
    lastIndex += 1
    if (fibMap.has(lastIndex)) {
      return fibMap.get(lastIndex)
    }

    const value = fibMap.get(lastIndex - 1) + fibMap.get(lastIndex - 2)
    fibMap.set(lastIndex, value)
    return value
  }
}

const fib = genfib()

fib()
fib()
fib()
fib()
fib()
fib()
fib()
fib()
fib()
fib()
fib()
fib()

const fib2 = genfib()
fib2()
fib2()
fib2()

// [JS][6kyu] Lucas numbers
// lucas-numbers
// https://www.codewars.com/kata/55a7de09273f6652b200002e/train/javascript

const lucasMap = new Map([
  [1, 1],
  [0, 2],
  [-1, -1],
  [-2, 3],
])

const lucasnum = (n) => {
  if (lucasMap.has(n)) {
    return lucasMap.get(n)
  }

  if (n > 1) {
    const result = lucasnum(n - 1) + lucasnum(n - 2)
    lucasMap.set(n, result)
    return result
  }
  const result = lucasnum(n + 2) - lucasnum(n + 1)
  lucasMap.set(n, result)
  return result
}

lucasnum(-10) === 123
lucasnum(-5) === -11
lucasnum(-1) === -1
lucasnum(0) === 2
lucasnum(1) === 1
lucasnum(5) === 11
lucasnum(10) === 123

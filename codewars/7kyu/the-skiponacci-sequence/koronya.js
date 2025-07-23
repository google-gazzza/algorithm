// [JS][7kyu] The Skiponacci Sequence
// the-skiponacci-sequence
// https://www.codewars.com/kata/580777ee2e14accd9f000165/train/javascript

const fiboMap = new Map([
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
  [11, 89],
  [12, 144],
  [13, 233],
  [14, 377],
  [15, 610],
])

const getFibonacci = (n) => {
  if (fiboMap.has(n)) {
    return fiboMap.get(n)
  }
  const result = getFibonacci(n - 1) + getFibonacci(n - 2)
  fiboMap.set(n, result)
  return result
}

const skiponacci = (n) => {
  const resultArr = []
  for (let i = 1; i <= n; i += 1) {
    if (i % 2 === 0) {
      resultArr.push('skip')
    } else {
      resultArr.push(getFibonacci(i))
    }
  }
  return resultArr.join(' ')
}

skiponacci(1) === '1'
skiponacci(5) === '1 skip 2 skip 5'
skiponacci(7) === '1 skip 2 skip 5 skip 13'

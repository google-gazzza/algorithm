// [JS][6kyu] Color Choice
// color-choice
// https://www.codewars.com/kata/55be10de92aad5ef28000023/train/javascript

const factorialMap = new Map()
factorialMap.set(0, 1)

const getFactorial = (n) => {
  if (factorialMap.has(n)) {
    return factorialMap.get(n)
  }
  const result = n * getFactorial(n - 1)
  factorialMap.set(n, result)
  return result
}

const ncr = (n, r) => {
  if (r === 0) {
    return 1
  }
  return getFactorial(n) / (getFactorial(r) * getFactorial(n - r))
}

const isSame = (a, b) => Math.abs(a - b) < 0.0001

const checkchoose = (m, n) => {
  for (let x = 1; x <= n; x += 1) {
    if (isSame(ncr(n, x), m)) {
      return x
    }
  }
  return -1
}

// checkchoose(6, 4) === 2
// checkchoose(4, 4) === 1
// checkchoose(4, 20) === -1
// checkchoose(35, 7) === 3
// checkchoose(36, 7) === -1
// checkchoose(265182525, 31)

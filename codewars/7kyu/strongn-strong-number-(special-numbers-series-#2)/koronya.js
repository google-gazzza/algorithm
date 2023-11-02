// [JS][7kyu] Strong Number (Special Numbers Series #2)
// strong-number-special-numbers-series-2
// https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript

const factorialMap = new Map()
factorialMap.set(0, 1)

const factorial = (n) => {
  if (factorialMap.has(n)) {
    return factorialMap.get(n)
  }
  const result = n * factorial(n - 1)
  factorialMap.set(n, result)

  return result
}

const strong = (n) => {
  return n ===
    String(n)
      .split('')
      .reduce((acc, cur) => acc + factorial(Number(cur)), 0)
    ? 'STRONG!!!!'
    : 'Not Strong !!'
}

strong(1) === 'STRONG!!!!'

strong(2) === 'STRONG!!!!'

strong(145) === 'STRONG!!!!'

strong(7) === 'Not Strong !!'

strong(93) === 'Not Strong !!'

strong(185) === 'Not Strong !!'

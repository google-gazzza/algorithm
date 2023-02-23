// [JS][6kyu] The Non-Discriminate FactorialThe Non-Discriminate Factorial
// the-non-discriminate-factorial
// https://www.codewars.com/kata/53fe2171d5679bff300007d9/train/javascript

const factorialMap = new Map()
factorialMap.set(0, 1)
factorialMap.set(1, 1)

const factorialPlus = (n) => {
  if (factorialMap.has(n) === true) {
    return factorialMap.get(n)
  }

  const result = n * factorial(n - 1)
  factorialMap.set(n, result)
  return result
}

const factorial = (n) => {
  if (n > 0) {
    return factorialPlus(n)
  }
  const invertN = -1 * n

  return invertN % 2 === 0 ? factorialPlus(invertN) : -1 * factorialPlus(invertN)
}

factorial(5)
factorial(-5)
factorial(-4)

factorial(9)
factorial(10)
factorial(-10)
factorial(-9)

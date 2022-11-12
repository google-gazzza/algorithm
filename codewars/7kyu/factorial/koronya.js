// [JS][7kyu] Factorial
// factorial
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

const nMap = new Map()
nMap.set(0, 1)
nMap.set(1, 1)

const factorial = (n) => {
  if (n < 0 || n > 12) {
    throw RangeError
  }
  if (nMap.has(n) === true) {
    return nMap.get(n)
  }
  const num = n * factorial(n - 1)
  nMap.set(n, num)

  return num
}

factorial(0)
factorial(1)
factorial(2)
factorial(3)
factorial(5)
factorial(10)
factorial(13)

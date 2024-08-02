// [JS][7kyu] Factorial division
// factorial-division
// https://www.codewars.com/kata/52f3a8e1f85fadcdf7001e31/train/javascript

// - n and d will be positive BigInts, and also n > d. No need to check any of that
const factorialDivision = (n, d) => {
  let result = 1n
  for (let i = n; i > d; i -= 1n || 0) {
    result *= i
  }
  return result
}

factorialDivision(5n, 3n)
factorialDivision(8n, 5n)
factorialDivision(10000n, 9999n)

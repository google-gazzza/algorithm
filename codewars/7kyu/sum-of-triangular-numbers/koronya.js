// [JS][7kyu] Sum of Triangular Numbers
// sum-of-triangular-numbers
// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript

const sumAn = (n) => (n ** 3 + 3 * n ** 2 + 2 * n) / 6

const sumTriangularNumbers = (n) => {
  if (n < 0) {
    return 0
  }

  return sumAn(n)
}

sumTriangularNumbers(6)
sumTriangularNumbers(34)
sumTriangularNumbers(-291)
sumTriangularNumbers(943)
sumTriangularNumbers(-971)

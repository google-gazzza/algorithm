// [JS][6kyu] Calculate Hypotenuse of Right-angled Triangle
// calculate-hypotenuse-of-right-angled-triangle
// https://www.codewars.com/kata/525a3d6b85a9a47fcf00055a/train/javascript

const getRoundNumber = (num, n) => Math.round(num * Math.pow(10, n)) / Math.pow(10, n)

const calculateHypotenuse = (a, b) => {
  console.log(`a: ${a}, b: ${b}`)
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers')
  }
  if (a <= 0 || b <= 0) {
    throw new Error('Both arguments must be greater than zero')
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Both arguments must be numbers')
  }
  return getRoundNumber(Math.sqrt(a * a + b * b), 3)
}

calculateHypotenuse(1, 1) === 1.414
calculateHypotenuse(3, 4) === 5.0
calculateHypotenuse(9, 9) === 12.728

calculateHypotenuse(-2, 1)
calculateHypotenuse(2, -3)
calculateHypotenuse(9, 0)
calculateHypotenuse('one', 1)
calculateHypotenuse(3, 'two')
calculateHypotenuse(3)
calculateHypotenuse()
calculateHypotenuse(true, 4)
calculateHypotenuse(2, false)
calculateHypotenuse(NaN, 5)
calculateHypotenuse(6, NaN)

// TODO: complete calculateHypotenuse so that it returns the hypotenuse length
// for a triangle with sides of length a, b, and c, where c is the hypotenuse.
// The solution should verify that inputs are valid numbers (both above zero).

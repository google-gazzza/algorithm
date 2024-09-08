// [JS][6kyu] Pythagorean Triplets
// pythagorean-triplets
// https://www.codewars.com/kata/59c32c609f0cbce0ea000073/train/javascript

const pythagoreanTriplet = (n) => {
  for (let a = 1; a < n / 3; a += 1) {
    const aSquare = a ** 2
    for (let b = a + 1; b < n / 2; b += 1) {
      const c = n / a / b
      if (aSquare + b ** 2 === c ** 2) {
        return [a, b, c]
      }
    }
  }
  return null
}

// TLE
const pythagoreanTriplet2 = (n) => {
  for (let a = 1; a < n; a += 1) {
    for (let b = a + 1; b < n; b += 1) {
      const c = Math.sqrt(a ** 2 + b ** 2)
      if (c % 1 === 0 && a * b * c === n) {
        return [a, b, c]
      }
    }
  }
  return null
}

pythagoreanTriplet(60)
pythagoreanTriplet(780)
pythagoreanTriplet(2040)

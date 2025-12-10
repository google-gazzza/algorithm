// [JS][7kyu] The Power of Exponents
// the-power-of-exponents
// https://www.codewars.com/kata/53270633b7320eeb0500031d/train/javascript

const power = (base, exponent) => {
  const limit = Math.abs(exponent)
  let value = 1
  for (let i = 0; i < limit; i += 1) {
    value *= base
  }
  return exponent < 0 ? 1 / value : value
}

power(2, 3) === 8
power(4, -2) === 0.0625

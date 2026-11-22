// [JS][7kyu] Convert Improper Fraction to Mixed Numeral
// convert-improper-fraction-to-mixed-numeral
// https://www.codewars.com/kata/574e4175ff5b0a554a00000b/train/javascript

const convertToMixedNumeral = (parm) => {
  const [numerator, denominator] = parm.split('/').map((str) => Number(str))
  const absNumerator = Math.abs(numerator)
  const absDenominator = Math.abs(denominator)
  if (absNumerator < absDenominator) {
    return parm
  }

  if (numerator > 0) {
    const quota = Math.floor(numerator / denominator)
    const remainder = numerator % denominator
    return remainder === 0 ? `${quota}` : `${quota} ${remainder}/${denominator}`
  }

  const quota = Math.floor(numerator / denominator) + 1
  const remainder = numerator % denominator
  return remainder === 0 ? `${quota - 1}` : `${quota} ${remainder * -1}/${denominator}`
}

// convertToMixedNumeral('6/2') === '3'
// convertToMixedNumeral('74/3') === '24 2/3'
// convertToMixedNumeral('-504/26') === '-19 10/26'
// convertToMixedNumeral('9/18') === '9/18'
// convertToMixedNumeral('-64/8')

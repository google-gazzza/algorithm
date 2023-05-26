// [Medium] 1447. Simplified Fractions
// 1447_simplified_fractions

// https://leetcode.com/problems/simplified-fractions
// Runtime: 116 ms, faster than 94.12% of JavaScript online submissions for Simplified Fractions.
// Memory Usage: 44.4 MB, less than 97.06% of JavaScript online submissions for Simplified Fractions.

const getGCD = (a, b) => {
  if (a === 0) {
    return b
  }
  return getGCD(b % a, a)
}

const isSimplified = (a, b) => getGCD(a, b) === 1

/**
 * @param {number} n
 * @return {string[]}
 */
const simplifiedFractions = function (n) {
  const resultArr = []
  for (let down = n; down > 0; down -= 1 || 0) {
    for (let up = down - 1; up > 0; up -= 1 || 0) {
      if (isSimplified(down, up)) {
        resultArr.push(`${up}/${down}`)
      }
    }
  }

  return resultArr
}

simplifiedFractions(4) //?
simplifiedFractions(3) //?
simplifiedFractions(5) //?
simplifiedFractions(6) //?

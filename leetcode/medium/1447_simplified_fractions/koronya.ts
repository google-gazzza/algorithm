// [Medium] 1447. Simplified Fractions
// 1447_simplified_fractions

// https://leetcode.com/problems/simplified-fractions
// Runtime: 120 ms, faster than 100.00% of TypeScript online submissions for Simplified Fractions.
// Memory Usage: 45.4 MB, less than 100.00% of TypeScript online submissions for Simplified Fractions.

const getGCD = (a: number, b: number): number => {
  if (a === 0) {
    return b
  }
  return getGCD(b % a, a)
}

const isSimplified = (a: number, b: number): boolean => getGCD(a, b) === 1

/**
 * @param {number} n
 * @return {string[]}
 */
function simplifiedFractions(n: number): string[] {
  const resultArr: string[] = []
  for (let down: number = n; down > 0; down -= 1 || 0) {
    for (let up: number = down - 1; up > 0; up -= 1 || 0) {
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

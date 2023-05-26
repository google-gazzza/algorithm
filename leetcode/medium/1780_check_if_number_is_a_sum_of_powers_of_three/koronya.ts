// [Medium] 1780. Check if Number is a Sum of Powers of Three
// 1780_check_if_number_is_a_sum_of_powers_of_three

// https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three
// Runtime: 124 ms, faster than 54.55% of TypeScript online submissions for Check if Number is a Sum of Powers of Three.
// Memory Usage: 39 MB, less than 100.00% of TypeScript online submissions for Check if Number is a Sum of Powers of Three.

const getClosest = (num: number): number => {
  let result = 17
  while (result > 0) {
    if (3 ** result <= num) {
      return result
    }
    result -= 1
  }

  return result
}

const getThreeVar = (num: number): number => 3 ** num

/**
 * @param {number} n
 * @return {boolean}
 */
function checkPowersOfThree(n: number): boolean {
  const closestVar: number = getClosest(n)
  const rest: number = n - getThreeVar(closestVar)
  if (rest === 0) {
    return true
  }
  let resultFlag: boolean = false
  const backTracking = (sum: number, start: number) => {
    if (sum > rest || resultFlag === true) {
      return
    } else if (sum === rest) {
      resultFlag = true
      return
    }
    for (let i = start + 1; i < closestVar; i += 1) {
      backTracking(sum + getThreeVar(i), i)
    }
  }

  for (let i = 0; i < closestVar; i += 1) {
    backTracking(getThreeVar(i), i)
  }

  return resultFlag
}

// checkPowersOfThree(12) //?
checkPowersOfThree(27) //?
// checkPowersOfThree(91) //?
// checkPowersOfThree(21) //?

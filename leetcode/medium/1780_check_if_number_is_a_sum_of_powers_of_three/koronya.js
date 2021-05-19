// [Medium] 1780. Check if Number is a Sum of Powers of Three
// 1780_check_if_number_is_a_sum_of_powers_of_three

// https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three
// Runtime: 116 ms, faster than 36.05% of JavaScript online submissions for Check if Number is a Sum of Powers of Three.
// Memory Usage: 38.5 MB, less than 81.40% of JavaScript online submissions for Check if Number is a Sum of Powers of Three.

const getClosest = (num) => {
  let result = 17
  while (result > 0) {
    if (3 ** result <= num) {
      return result
    }
    result -= 1
  }

  return result
}

const getThreeVar = (num) => 3 ** num

/**
 * @param {number} n
 * @return {boolean}
 */
const checkPowersOfThree = function (n) {
  const closestVar = getClosest(n)
  const rest = n - getThreeVar(closestVar)
  if (rest === 0) {
    return true
  }
  let resultFlag = false
  const backTracking = (sum, start) => {
    if (sum > rest || resultFlag === true) {
      return
    } else if (sum === rest) {
      resultFlag = true
      return
    }
    for (let i = start + 1; i < closestVar; i += 1 || 0) {
      backTracking(sum + getThreeVar(i), i)
    }
  }

  for (let i = 0; i < closestVar; i += 1 || 0) {
    backTracking(getThreeVar(i), i)
  }

  return resultFlag
}

// checkPowersOfThree(12) //?
checkPowersOfThree(27) //?
// checkPowersOfThree(91) //?
// checkPowersOfThree(21) //?

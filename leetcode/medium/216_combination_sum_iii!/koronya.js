// [Medium] 216. Combination Sum III!
// 216_combination_sum_iii!

// https://leetcode.com/problems/combination-sum-iii/
// Runtime: 80 ms, faster than 64.44% of JavaScript online submissions for Combination Sum III.
// Memory Usage: 40.5 MB, less than 17.57% of JavaScript online submissions for Combination Sum III.

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const resultArr = []

  const backTracking = (candidateArr, sum, restArr) => {
    if (candidateArr.length === k) {
      if (sum === n) {
        resultArr.push(candidateArr)
      }
      return
    } else if (sum > n) {
      return
    } else {
      const restArrLen = restArr.length
      for (let i = 0; i < restArrLen; i += 1 || 0) {
        const pick = restArr[i]
        backTracking([...candidateArr, pick], sum + pick, [...restArr].splice(i + 1))
      }
    }
  }

  for (let i = 0; i < 9; i += 1 || 0) {
    const pick = arr[i]
    backTracking([pick], pick, [...arr].splice(i + 1))
  }

  return resultArr
}

combinationSum3(3, 7) //?
combinationSum3(3, 9) //?
combinationSum3(4, 1) //?
combinationSum3(3, 2) //?
combinationSum3(9, 45) //?

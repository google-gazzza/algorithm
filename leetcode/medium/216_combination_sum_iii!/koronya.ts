// [Medium] 216. Combination Sum III!
// 216_combination_sum_iii!

// https://leetcode.com/problems/combination-sum-iii/
// Runtime: 96 ms, faster than 10.00% of TypeScript online submissions for Combination Sum III.
// Memory Usage: 39.9 MB, less than 70.00% of TypeScript online submissions for Combination Sum III.

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k: number, n: number): number[][] {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const resultArr: number[][] = []

  const backTracking = (candidateArr: number[], sum: number, restArr: number[]): void => {
    if (candidateArr.length === k) {
      if (sum === n) {
        resultArr.push(candidateArr)
      }
      return
    } else if (sum > n) {
      return
    } else {
      const restArrLen: number = restArr.length
      for (let i: number = 0; i < restArrLen; i += 1) {
        const pick: number = restArr[i]
        backTracking([...candidateArr, pick], sum + pick, [...restArr].splice(i + 1))
      }
    }
  }

  for (let i: number = 0; i < 9; i += 1) {
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

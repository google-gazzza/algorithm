// [Easy] 1005. Maximize Sum Of Array After K Negations
// 1005_maximize_sum_of_array_after_k_negations

// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
// Memory Usage: 40.5 MB, less than 59.42% of JavaScript online submissions for Maximize Sum Of Array After K Negations.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestSumAfterKNegations = function (nums, k) {
  const minusArr = []
  const plusArr = []
  let containZero = false
  nums.forEach((num) => {
    if (num > 0) {
      plusArr.push(num)
    } else if (num < 0) {
      minusArr.push(num)
    } else {
      containZero = true
    }
  })
  plusArr.sort((a, b) => a - b)
  minusArr.sort((a, b) => a - b)

  const minusArrLen = minusArr.length
  const sumOfPlusArr = plusArr.reduce((acc, cur) => acc + cur, 0)
  const sumOfMinusArr = minusArr.reduce((acc, cur) => acc + cur, 0)

  if (minusArrLen === k) {
    return -1 * sumOfMinusArr + sumOfPlusArr
  } else if (minusArrLen > k) {
    let kSum = 0
    for (let i = 0; i < k; i += 1 || 0) {
      kSum += -1 * minusArr[i]
    }
    return sumOfPlusArr + sumOfMinusArr + 2 * kSum
  }

  if (minusArrLen === 0) {
    if (containZero === true) {
      return sumOfPlusArr
    }
    return k % 2 === 0 ? sumOfPlusArr : sumOfPlusArr - 2 * Math.min(...plusArr)
  }

  let sum = sumOfPlusArr - sumOfMinusArr
  if ((k - minusArrLen) % 2 === 1 && containZero === false) {
    sum -= 2 * Math.min(...[...plusArr, ...minusArr.map((item) => -1 * item)])
  }
  return sum
}

// largestSumAfterKNegations([4, 2, 3], 1) //?
// largestSumAfterKNegations([3, -1, 0, 2], 3) //?
// largestSumAfterKNegations([2, -3, -1, 5, -4], 2) //?
// largestSumAfterKNegations([2, -3, -1, 5, -4], 3) //?
// largestSumAfterKNegations([2, -3, -1, 5, -4], 4) //?
// largestSumAfterKNegations([2, -3, -1, 5, -4], 5) //?

// largestSumAfterKNegations([5, 6, 9, -3, 3], 2) //?
// largestSumAfterKNegations([5, 6, 9, -3, 1], 2) //?
largestSumAfterKNegations([5, 6, 9, 0, 1], 2) //?

// [Easy] 1539. Kth Missing Positive Number
// 1539_kth_missing_positive_number

// https://leetcode.com/problems/kth-missing-positive-number
// Runtime: 64 ms, faster than 99.22% of JavaScript online submissions for Kth Missing Positive Number.
// Memory Usage: 37.1 MB, less than 45.20% of JavaScript online submissions for Kth Missing Positive Number.
const findKthPositive = (arr, k) => {
  const arrLen = arr.length
  let i = 0
  let num = 1
  const resultArr = []

  while (resultArr.length < k) {
    if (i >= arrLen) {
      resultArr.push(num)
    } else {
      if (num < arr[i]) {
        resultArr.push(num)
      } else {
        i += 1
      }
    }
    num += 1
  }

  return resultArr[resultArr.length - 1]
}

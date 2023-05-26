// [Easy] 1837. Sum of Digits in Base K
// 1837_sum_of_digits_in_base_k

// https://leetcode.com/problems/sum-of-digits-in-base-k
// Runtime: 80 ms, faster than 56.36% of JavaScript online submissions for Sum of Digits in Base K.
// Memory Usage: 38.4 MB, less than 36.62% of JavaScript online submissions for Sum of Digits in Base K.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = function (n, k) {
  if (n === k) {
    return 1
  }
  let target = n
  let tempArr = []
  while (target >= k) {
    const remainder = target % k
    target = Math.floor(target / k)
    tempArr.push(remainder)
  }
  tempArr.push(target)
  let resultArr = tempArr[0] === 0 ? tempArr.slice(1) : tempArr
  return resultArr.reduce((acc, cur) => acc + cur, 0)
}

sumBase(34, 6) //?
sumBase(10, 10) //?
sumBase(42, 2) //?

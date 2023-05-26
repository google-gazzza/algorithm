// [Easy] 2180. Count Integers With Even Digit Sum
// 2180_count_integers_with_even_digit_sum

// https://leetcode.com/problems/count-integers-with-even-digit-sum
// Runtime: 64 ms, faster than 94.03% of JavaScript online submissions for Count Integers With Even Digit Sum.
// Memory Usage: 44.8 MB, less than 15.92% of JavaScript online submissions for Count Integers With Even Digit Sum.

/**
 * @param {number} num
 * @return {number}
 */
const countEven = function (num) {
  let count = 0
  const isValid = (strNum) => {
    const sum = String(strNum)
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0)
    return sum <= num && sum % 2 === 0
  }

  for (let i = 2; i <= num; i += 1 || 0) {
    if (isValid(i) === true) {
      count += 1
    }
  }
  return count
}

countEven(4)
countEven(30)

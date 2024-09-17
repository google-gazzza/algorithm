// [Easy] 2180. Count Integers With Even Digit Sum
// 2180_count_integers_with_even_digit_sum

// https://leetcode.com/problems/count-integers-with-even-digit-sum
// Runtime: 68 ms, faster than 94.12% of TypeScript online submissions for Count Integers With Even Digit Sum.
// Memory Usage: 45.7 MB, less than 23.53% of TypeScript online submissions for Count Integers With Even Digit Sum.

function countEven(num: number): number {
  let count: number = 0
  const isValid = (strNum: number): boolean => {
    const sum = String(strNum)
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0)
    return sum <= num && sum % 2 === 0
  }

  for (let i: number = 2; i <= num; i += 1) {
    if (isValid(i) === true) {
      count += 1
    }
  }
  return count
}

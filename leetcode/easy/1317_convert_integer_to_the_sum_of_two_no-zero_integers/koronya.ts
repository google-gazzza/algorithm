// [Easy] 1317. Convert Integer to the Sum of Two No-Zero Integers
// 1317_convert_integer_to_the_sum_of_two_no-zero_integers

// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Convert Integer to the Sum of Two No-Zero Integers.
// Memory Usage: 40.3 MB, less than 100.00% of TypeScript online submissions for Convert Integer to the Sum of Two No-Zero Integers.

/**
 * @param {number} n
 * @return {number[]}
 */

const includeZero = (num: number): boolean => num.toString().includes('0')
function getNoZeroIntegers(n: number): number[] {
  for (let i: number = 1; i < n; i += 1) {
    const numA: number = i
    const numB: number = n - i
    if (includeZero(numA) === false && includeZero(numB) === false) {
      return [numA, numB]
    }
  }
  return []
}

getNoZeroIntegers(11) //?

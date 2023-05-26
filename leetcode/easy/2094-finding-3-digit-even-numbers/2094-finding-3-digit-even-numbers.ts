/*
2094-finding-3-digit-even-numbers
leetcode/easy/2094. Finding 3-Digit Even Numbers
URL: https://leetcode.com/problems/finding-3-digit-even-numbers/

NOTE: Description
NOTE: Constraints
  - 3 <= nums.length <= 100
  - 1 <= nums[i] <= 100

NOTE: Explanation
NOTE: Reference
*/

function findEvenNumbers(digits: number[]): number[] {
  const resultSet = new Set<string>();

  function generateThreeDigitEvenNumbers(prefix: number[], nums: number[]) {
    if (prefix.length === 3) {
      if (prefix[2] !== 0) {
        resultSet.add(prefix.reverse().join(''));
      }
      return;
    }

    for (let i = 0; i < nums.length; i += 1) {
      const newPrefix = [...prefix, nums[i]];
      const newNums = [...nums];
      newNums.splice(i, 1);
      generateThreeDigitEvenNumbers(newPrefix, newNums);
    }
  }

  for (let i = 0; i < digits.length; i += 1) {
    if (digits[i] % 2 === 0) {
      const newNums = [...digits];
      newNums.splice(i, 1);
      generateThreeDigitEvenNumbers([digits[i]], newNums);
    }
  }

  return Array.from(resultSet)
    .map(Number)
    .sort((a, b) => a - b);
}

let digits = [2, 1, 3, 0];
console.log(findEvenNumbers(digits));
// Output: [102,120,130,132,210,230,302,310,312,320]
// Explanation: All the possible integers that follow the requirements are in the output array.
//   Notice that there are no odd integers or integers with leading zeros.
//   Example 2:
//
digits = [2, 2, 8, 8, 2];
console.log(findEvenNumbers(digits));
// Output: [222,228,282,288,822,828,882]
// Explanation: The same digit can be used as many times as it appears in digits.
//   In this example, the digit 8 is used twice each time in 288, 828, and 882.
// Example 3:
//
// Input: digits = [3,7,5]
// Output: []
// Explanation: No even integers can be formed using the given digits.

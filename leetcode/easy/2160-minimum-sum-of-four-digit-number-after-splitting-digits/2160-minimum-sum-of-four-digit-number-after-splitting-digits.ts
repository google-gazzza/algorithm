/*
2160-minimum-sum-of-four-digit-number-after-splitting-digits
leetcode/easy/2160. Minimum Sum of Four Digit Number After Splitting Digits
Difficulty: easy
URL: https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

NOTE: Description

NOTE: Constraints
  - 1000 <= num <= 9999

NOTE: Explanation
*/

function minimumSum(num: number): number {
  const strNum = String(num).split('');
  strNum.sort((a, b) => a.localeCompare(b));

  return Number(strNum[0] + strNum[2]) + Number(strNum[1] + strNum[3]);
}


// Example 1:
//
let num = 2932;
console.log(minimumSum(num));
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
//   The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
// Example 2:
//
num = 4009;
console.log(minimumSum(num));
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
//   The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

/*
1903-largest-odd-number-in-string
leetcode/easy/1903. Largest Odd Number in String
URL: https://leetcode.com/problems/largest-odd-number-in-string/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function largestOddNumber(num: string): string {
  const numArr = num.split('');

  while (Number(numArr[numArr.length - 1]) % 2 === 0) {
    numArr.pop();
  }

  return numArr.join('');
}

let num = '52';
console.log(largestOddNumber(num));
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
//   Example 2:
//
num = '4206';
console.log(largestOddNumber(num));
// Output: ""
// Explanation: There are no odd numbers in "4206".
//   Example 3:
//
num = '35427';
console.log(largestOddNumber(num));

// Output: "35427"
// Explanation: "35427" is already an odd number.

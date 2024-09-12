j/*
2264-largest-3-same-digit-number-in-string
leetcode/easy/2264. Largest 3-Same-Digit Number in String
URL: https://leetcode.com/problems/largest-3-same-digit-number-in-string/
NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function largestGoodInteger(num: string): string {
  const result = [];

  for (let i = 0; i < num.length; i += 1) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      result.push(num.slice(i, i + 3));
    }
  }

  if (result.length === 0) {
    return '';
  }

  return String(Math.max(...result.map(Number)))
    .padStart(3, '0');
}

let num = '6777133339';
console.log(largestGoodInteger(num));
// Output: "777"
// Explanation: There are two distinct good integers: "777" and "333".
// "777" is the largest, so we return "777".
//   Example 2:

num = '2300019';
console.log(largestGoodInteger(num));
// Output: "000"
// Explanation: "000" is the only good integer.
//   Example 3:

num = '42352338';
console.log(largestGoodInteger(num));

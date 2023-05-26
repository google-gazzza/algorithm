/*
507-perfect-number
leetcode/easy/507. Perfect Number
Difficulty: easy
URL: https://leetcode.com/problems/perfect-number/

NOTE: Description

NOTE: Constraints
  1 <= num <= 108

NOTE: Explanation
*/

function checkPerfectNumber(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  const left = [1];
  const right = [num];
  let i = 2;

  while (i < right[0]) {
    const quotient = num / i;
    if (quotient % 1 === 0) {
      left.push(i);
      right.unshift(quotient);
    }
    i += 1;
  }
  right.pop();

  return [...left, ...right].reduce((acc, cur) => acc + cur) === num;
}

// Example 1:
//
let num = 28;
console.log(checkPerfectNumber(num));
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.
// Example 2:
//
num = 7;
console.log(checkPerfectNumber(num));
// Output: false

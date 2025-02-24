/*
2235-add-two-integers
leetcode/easy/2235. Add Two Integers
URL: https://leetcode.com/problems/add-two-integers/

NOTE: Description

NOTE: Constraints
  - -100 <= num1, num2 <= 100

NOTE: Explanation
*/

const sum = (num1: number, num2: number): number => num1 + num2;

// Example 1:
let num1 = 12;
let num2 = 5;
console.log(sum(num1, num2));
// Output: 17
// Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
//   Example 2:
//
num1 = -10;
num2 = 4;
console.log(sum(num1, num2));

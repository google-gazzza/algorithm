/*
2520-count-the-digits-that-divide-a-number
leetcode/easy/2520. Count the Digits That Divide a Number
URL: https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function countDigits(num: number): number {
  return num.toString()
    .split('')
    .filter((n) => num % Number(n) === 0)
    .length;
}

let num = 7;
console.log(countDigits(num));
//1

num = 121;
console.log(countDigits(num));
// Output: 2

num = 1248;
console.log(countDigits(num));
// 4

/*
367-valid-perfect-square
leetcode/easy/367. Valid Perfect Square
Difficulty: easy
URL: https://leetcode.com/problems/valid-perfect-square/
*/

function isPerfectSquare(num: number): boolean {
    return Math.sqrt(num) % 1 === 0;
  };
  
  // Example 1:
  //
  let num = 16;
  console.log(isPerfectSquare(num));
  // Output: true
  // Example 2:
  //
  num = 14;
  console.log(isPerfectSquare(num));
  // Output: false
  
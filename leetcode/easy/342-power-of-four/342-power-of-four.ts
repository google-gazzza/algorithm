/*
342-power-of-four
leetcode/easy/342. Power of Four
Difficulty: easy
URL: https://leetcode.com/problems/power-of-four/
*/

function isPowerOfFour(n: number): boolean {
    return Math.log(n) / Math.log(4) % 1 === 0;
  };
  
  
  // Example 1:
  //
  let n = 16;
  console.log(isPowerOfFour(n));
  // Output: true
  // Example 2:
  //
  n = 5;
  console.log(isPowerOfFour(n));
  // Output: false
  // Example 3:
  //
  n = 1;
  console.log(isPowerOfFour(n));
  // Output: true
  
/*
231-power-of-two
leetcode/easy/ 231. Power of Two
Difficulty: easy
URL: https://leetcode.com/problems/power-of-two/

*/

function isPowerOfTwo(n: number): boolean {
    return Math.log2(n) % 1 === 0;
  };
  
  
  // Example 1:
  let n = 1;
  console.log(isPowerOfTwo(n));
  // Output: true
  // Explanation: 20 = 1
  // Example 2:
  //
  n = 16;
  console.log(isPowerOfTwo(n));
  // Output: true
  // Explanation: 24 = 16
  // Example 3:
  //
  n = 3;
  console.log(isPowerOfTwo(n));
  // Output: false
  
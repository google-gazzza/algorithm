/*
263-ugly-number
leetcode/easy/263. Ugly Number
Difficulty: easy
URL: https://leetcode.com/problems/ugly-number/
*/

function isUgly(n: number): boolean {
    if (n === 0) {
      return false;
    }
  
    if (n === 1) {
      return true;
    }
  
    if (n % 2 === 0) {
      return isUgly(n / 2);
    }
  
    if (n % 3 === 0) {
      return isUgly(n / 3);
    }
  
    if (n % 5 === 0) {
      return isUgly(n / 5);
    }
  
    return false;
  };
  
  // Example 1:
  //
  let n = 6;
  console.log(isUgly(n));
  // Output: true
  // Explanation: 6 = 2 × 3
  // Example 2:
  //
  n = 1;
  console.log(isUgly(n));
  // Output: true
  // Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
  // Example 3:
  //
  n = 14;
  console.log(isUgly(n));
  // Output: false
  // Explanation: 14 is not ugly since it includes the prime factor 7.
  
  
  console.log(isUgly(0));
  console.log(isUgly(-6));
  
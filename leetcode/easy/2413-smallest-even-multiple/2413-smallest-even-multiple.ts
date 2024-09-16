/*
2413-smallest-even-multiple
leetcode/easy/2413. Smallest Even Multiple
URL: https://leetcode.com/problems/smallest-even-multiple/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function smallestEvenMultiple(n: number): number {
  if ((n / 2) % 1 === 0) {
    return n;
  }

  return n * 2;
}

// Example 1:
let n = 5;
smallestEvenMultiple(n);
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.
// Example 2:
n = 6;
smallestEvenMultiple(n);
// Output: 10
// Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

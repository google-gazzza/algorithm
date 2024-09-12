/*
441-arranging-coins
leetcode/easy/441. Arranging Coins
Difficulty: easy
URL: https://leetcode.com/problems/arranging-coins/

NOTE: Description

NOTE: Constraints
  1 <= n <= 231 - 1

NOTE: Explanation
*/

function arrangeCoins(n: number): number {
  let i = 0;

  while (i < n) {
    i += 1;
    n -= i;
  }

  return i;
};

let n = 5;
console.log(arrangeCoins(n));
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
n = 8;
console.log(arrangeCoins(n));
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.

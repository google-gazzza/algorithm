/*
292-nim-game
leetcode/easy/292. Nim Game
Difficulty: easy
URL: https://leetcode.com/problems/nim-game/

NOTE: Description

NOTE: Constraints
  1 <= n <= 231 - 1

NOTE: Explanation
  let's imagine you start with 4 stones.
  you can pick 1~3 stones at a time. and other player will take the rest. and you lose.
  but when you start with 4+1~3 stones, you can pick 1~3 stones at a time.
  then other play will face 4 stones.
  and he have to pick 1~3 whnich means, there will be left 1~3 stones and you will win.
  -
  let's imagine you start with 9 stones.
  if you make left 4 stones, you win remember that right?
  if you make left 8 stones, you win again.
  because you can force to situation to make him face to 4 stones.
  -
  when other place face 8, he can tak 1~3 stones.
  this means he will left 8 - (1~3) = 7~5 stones.
  and you can make situation to make him face to 4 stones.
  -
  so if (s†one.count % 4 !== 0), and if you start at first you will win.
  -
  // 1,2,3, 4, 5,6,7 , 8, 9,10,11 ,12
*/

function canWinNim(n: number): boolean {
  return n % 4 !== 0;
};

// 1,2,3, 4, 5,6,7 , 8, 9,10,11 ,12

// Example 1:
//
let n = 4;
console.log(canWinNim(n));
// Output: false
// Explanation: These are the possible outcomes:
// 1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
// 2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
// 3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
//   In all outcomes, your friend wins.
//   Example 2:
//
n = 1;
console.log(canWinNim(n));
// Output: true
// Example 3:
//
n = 2;
console.log(canWinNim(n));
// Output: true

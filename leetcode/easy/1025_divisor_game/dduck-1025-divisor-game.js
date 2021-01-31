/*
1025-divisor-game

# leetcode/easy/1025. Divisor Game
Difficulty: easy
URL: https://leetcode.com/problems/divisor-game/
tag: dynamic-programming

## Approach

### en

### kr

## Solution
### JavaScript

*/

const divisorGame = function (n) {
  let count = 0;
  
  while (n) {
    n -= 1;
    count += 1;
  }
  
  return count % 2 === 0;
};

// test
console.log(divisorGame(2));
// Input: 2
// Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.
//
console.log(divisorGame(3));
//   Input: 3
// Output: false
// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
console.log(divisorGame(4));

/*
1561-maximum-number-of-coins-you-can-get
leetcode/medium/1561. Maximum Number of Coins You Can Get
URL: https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);

  let result = 0;

  while (piles.length >= 3) {
    piles.pop();
    result += piles.pop();
    piles.shift();
  }

  return result;
};

let piles = [2, 4, 1, 2, 7, 8];

console.log(maxCoins(piles));
// 9

piles = [2, 4, 5];
console.log(maxCoins(piles));
// Output: 4

piles = [9, 8, 7, 6, 5, 1, 2, 3, 4];
console.log(maxCoins(piles));
// Output: 18;

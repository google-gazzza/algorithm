/*
2347-best-poker-hand
leetcode/easy/2347. Best Poker Hand
URL: https://leetcode.com/problems/best-poker-hand/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function bestHand(ranks: number[], suits: string[]): string {
  if (suits.every((e) => e === suits[0])) {
    return 'Flush';
  }

  const map = new Map();
  for (let i = 0; i < ranks.length; i += 1) {
    map.set(ranks[i], Number(map.get(ranks[i]) || 0) + 1);
  }

  if (Array.from(map.values()).some((num) => num >= 3)) {
    return 'Three of a Kind';
  }

  if (Array.from(map.values()).some((num) => num === 2)) {
    return 'Pair';
  }

  return 'High Card';
}

let ranks = [13, 2, 3, 1, 9];
let suits = ['a', 'a', 'a', 'a', 'a'];
console.log(bestHand(ranks, suits));
// Output: "Flush"

ranks = [4, 4, 2, 4, 4];
suits = ['d', 'a', 'a', 'b', 'c'];
console.log(bestHand(ranks, suits));
// Output: 'Three of a Kind';

ranks = [10, 10, 2, 12, 9];
suits = ['a', 'b', 'c', 'a', 'd'];
console.log(bestHand(ranks, suits));
// Output: "Pair"

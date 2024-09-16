/*
1046-last-stone-weight
leetcode/easy/1046. Last Stone Weight
Difficulty: easy
URL: https://leetcode.com/problems/last-stone-weight/

NOTE: Description

NOTE: Constraints
  - 1 <= stones.length <= 30
  - 1 <= stones[i] <= 1000

NOTE: Explanation
*/

function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const y = stones.pop();
    const x = stones.pop();

    if (y !== x) {
      stones.push(y - x);
    }
  }

  return stones.pop() || 0;
};

// Example 1:
let stones = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(stones));
// Output: 1
// Explanation:
//   We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
//   we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
//   we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
//   we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:
//
stones = [1];
console.log(lastStoneWeight(stones));
// Output: 1

stones = [2, 2];
console.log(lastStoneWeight(stones));

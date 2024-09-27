/*
2144-minimum-cost-of-buying-candies-with-discount
leetcode/easy/2144. Minimum Cost of Buying Candies With Discount
URL: https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function minimumCost(cost: number[]): number {
  return cost.sort((a, b) => b - a)
    .reduce((acc, cur, index) => {
      if ((index + 1) % 3 === 0) {
        return acc;
      }

      return acc + cur;
    }, 0);
}

let cost = [1, 2, 3];
console.log(minimumCost(cost));
// Output: 5

cost = [6, 5, 7, 9, 2, 2];
console.log(minimumCost(cost));
// Output: 23

cost = [5, 5];
console.log(minimumCost(cost));
// Output: 10

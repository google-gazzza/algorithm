/*
746-min-cost-climbing-stairs
# leetcode/easy/746. Min Cost Climbing Stairs
Difficulty: easy
URL: https://leetcode.com/problems/min-cost-climbing-stairs/
Tags: dynamic-programming

## Approach

### en

### kr

## Solution
### JavaScript

*/
const minCostClimbingStairs = (cost) => {
  let step1 = cost[0];
  let step2 = cost[1];
  
  for (let i = 2; i < cost.length; i += 1) {
    const newStep = Math.min(step1, step2) + cost[i];
    step1 = step2;
    step2 = newStep;
  }
  return Math.min(step1, step2);
};

// test
console.log(minCostClimbingStairs([10, 15, 20]));
// Input: cost = [10, 15, 20]
// Output: 15

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
// Explanation: CheapestInput: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].is start on cost[1], pay that cost and go to the top.

console.log(minCostClimbingStairs([0, 2, 2, 1]));
// 2;

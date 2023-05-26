/*
70-climbing-stairs

# leetcode/easy/70. Climbing Stairs
Difficulty: easy
URL: https://leetcode.com/problems/climbing-stairs/
Tags: dynamic-programming

## Approach

### en

### kr

## Solution
### JavaScript

*/

const climbStairs = (k, step = 3, n2 = 1, n1 = 1) => {
  if (k === 1) {
    return 1;
  }
  if (k === 2) {
    return 2;
  }
  if (k >= step) {
    return climbStairs(k, step + 1, n1, n2 + n1);
  }
  
  return n2 + n1;
};

// test
console.log(climbStairs(4), 5);
console.log(climbStairs(5), 8);

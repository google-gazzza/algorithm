/*
70-climbing-stairs

# leetcode/easy/70. Climbing Stairs
Difficulty: easy
URL: https://leetcode.com/problems/climbing-stairs/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

// -------------------------
// folding solution
// -------------------------
const climbStairs = (n, prevStep = 0, currentstep = 1) => {
  if (n === 0) {
    return currentstep;
  }
  
  return climbStairs(n - 1, currentstep, prevStep + currentstep);
};

test('test climbStairs', () => {
  expect(climbStairs(1)).toEqual(1);
  expect(climbStairs(2)).toEqual(2);
  expect(climbStairs(3)).toEqual(3);
  expect(climbStairs(45)).toEqual(1836311903);
});

// -------------------------
// recursion - naive solution
// -------------------------
const climbStairs = function (n) {
  if (n < 3) {
    return n;
  }
  
  return climbStairs(n - 1) + climbStairs(n - 2);
};

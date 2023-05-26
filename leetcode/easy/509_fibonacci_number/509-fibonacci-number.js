/*
509-fibonacci-number

# leetcode/easy/509. Fibonacci Number
Difficulty: easy
URL: https://leetcode.com/problems/fibonacci-number
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const PHI = (1 + Math.sqrt(5)) / 2;
const fib = (n) => Math.round((PHI ** n) / Math.sqrt(5));

test('fib', () => {
  expect(fib(2)).toEqual(1);
  expect(fib(3)).toEqual(2);
  expect(fib(4)).toEqual(3);
});

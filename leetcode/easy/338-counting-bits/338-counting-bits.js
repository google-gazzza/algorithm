/*
338-counting-bits

# leetcode/easy/338. Counting Bits
Difficulty: easy
URL: https://leetcode.com/problems/counting-bits/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
  const result = [];
  
  for (let i = 0; i <= n; i += 1) {
    result.push(i.toString(2).match(/1/g)?.length || 0);
  }
  
  return result;
};


test('countBits', () => {
  expect(countBits(2)).toEqual([0, 1, 1]);
  expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
});
// Example 1:
//
// Input: n = 2
// Output: [0,1,1]
// Explanation:
//   0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:
//
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
//   0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

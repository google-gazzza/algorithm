/*
number-of-1-bits

# leetcode/top-interview-questions/easy/ Number of 1 Bits
Difficulty:
URL: https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/565/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  return n.toString(2).match(/1/g)?.length || 0;
};

test('hammingWeight', () => {
  expect(hammingWeight(0o0000000000000000000000000001011)).toEqual(3);
  expect(hammingWeight(0o0000000000000000000000010000000)).toEqual(1);
  expect(hammingWeight(11111111111111111111111111111101)).toEqual(32);
});
// Example 1:
//
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
//   Example 2:
//
// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
//   Example 3:
//
// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

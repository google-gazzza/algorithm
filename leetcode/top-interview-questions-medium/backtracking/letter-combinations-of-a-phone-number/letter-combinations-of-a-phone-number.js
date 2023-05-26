/*
letter-combinations-of-a-phone-number

# leetcode/top-interview-questions/medium/backtracking/Letter Combinations of a Phone Number
Difficulty:
URL: https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/793/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const DIALPAD = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};

const letterCombinations = function (digits, step = 0, prefix = '') {
  if (step >= digits.length) {
    if (digits.length === 0) {
      return [];
    }
    return prefix;
  }
  
  return DIALPAD[digits[step]].map((e) => letterCombinations(digits, step + 1, prefix + e)).flat();
};


test('letterCombinations', () => {
  expect(letterCombinations('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  expect(letterCombinations('')).toEqual([]);
  expect(letterCombinations('2')).toEqual(["a", "b", "c"]);
});


// Example 1:
//
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:
//
// Input: digits = ""
// Output: []
// Example 3:
//
// Input: digits = "2"
// Output: ["a","b","c"]

/*
17-letter-combinations-of-a-phone-number

# leetcode/medium/17. Letter Combinations of a Phone Number
Difficulty: medium
URL: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

## Approach

### en
Get subset trough recursion.

### kr
recursion을 이용해서 subset을 구합니다.

## Solution
### JavaScript

 */

const NUMBER_PADS_CHARS = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

const getCombinations = (list, prefix = []) => {
  if (!Array.isArray(list[0])) {
    return prefix.join('');
  }
  
  return list[0].map((e) => {
    return getCombinations(list.slice(1), prefix.concat(e));
  }).reduce((acc, cur) => acc.concat(cur), []);
};

const letterCombinations = (digits) => {
  const list = [...digits].map((e) => NUMBER_PADS_CHARS[e]);
  return (getCombinations(list) || []);
};

// test
console.log(letterCombinations('23'));
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations(''));
// NUMBER_PADS_CHARS['2'];
// //?

console.log(letterCombinations('2'));
// Input: digits = "2"
// Output: ["a","b","c"]

// 520. Detect Capital
// https://leetcode.com/problems/detect-capital/

// Runtime: 52 ms, faster than 97.27% of JavaScript online submissions for Detect Capital.
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for Detect Capital.
// Runtime: 64 ms, faster than 54.09% of JavaScript online submissions for Detect Capital.
// Memory Usage: 34.3 MB, less than 75.00% of JavaScript online submissions for Detect Capital.
// Runtime: 60 ms, faster than 74.55% of JavaScript online submissions for Detect Capital.
// Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Detect Capital.

const detectCapitalUse = (word) => {
  return word.match(/([A-Z][a-z]+$)|(^[A-Z]+$)|(^[a-z]*)/)[0] === word;
};

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('leetcode'));
console.log(detectCapitalUse('Google'));
console.log(detectCapitalUse('FlaG'));

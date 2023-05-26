/*
392-is-subsequence

# leetcode/easy/392. Is Subsequence
Difficulty: easy
URL: https://leetcode.com/problems/is-subsequence/
Tags: dynamic-programming

## Approach

### en

### kr

## Solution
### JavaScript

*/

const isSubsequence = (s, t) => {
  let pointer = 0;
  
  for (let i = 0; i < t.length; i += 1) {
    if (s[pointer] === t[i]) {
      pointer += 1;
    }
  }
  
  return pointer === s.length;
};

// test
console.log(isSubsequence('abc', 'ahbgdc'));
// Input: s = "abc", t = "ahbgdc"
// Output: true

console.log(isSubsequence('axc', 'ahbgdc'));
// Input: s = "axc", t = "ahbgdc"
// Output: false

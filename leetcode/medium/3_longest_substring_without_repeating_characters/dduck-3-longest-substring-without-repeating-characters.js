/*
3-longest-substring-without-repeating-characters

# leetcode/medium/3. Longest Substring Without Repeating Characters
Difficulty: medium
URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/

## Approach

### en
Use sliding window technique

### kr
슬라이딩 윈도우 기법을 사용해서 해결합니다.

## Solution
### JavaScript

*/

const lengthOfLongestSubstring = function (s) {
  let window = 0;
  
  for (let i = 0; i < s.length - window; i += 1) {
    let target = s.substring(i, i + window + 1);
    
    while (new Set([...(target)]).size > window) {
      window += 1;
      target = s.substring(i, i + window + 1);
    }
  }
  
  return window;
};

// test
console.log(lengthOfLongestSubstring('abcabcbb'));
// input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3

console.log(lengthOfLongestSubstring('bbbbb'));
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

console.log(lengthOfLongestSubstring('pwwkew'));
// 3

console.log(lengthOfLongestSubstring(''));
// 0

/*
2255-count-prefixes-of-a-given-string
leetcode/easy/2255. Count Prefixes of a Given String
URL: https://leetcode.com/problems/count-prefixes-of-a-given-string/

NOTE: Description
NOTE: Constraints
  - 1 <= words.length <= 1000
  - 1 <= words[i].length, s.length <= 10
  - words[i] and s consist of lowercase English letters only.

NOTE: Explanation
NOTE: Reference
*/

function countPrefixes(words: string[], s: string): number {
  return words.filter((e) => s.startsWith(e)).length;
};


let words = ['a', 'b', 'c', 'ab', 'bc', 'abc'];
let s = 'abc';
console.log(countPrefixes(words, s));

// Output: 3
// Explanation:
//   The strings in words which are a prefix of s = "abc" are:
//   "a", "ab", and "abc".
//   Thus the number of strings in words which are a prefix of s is 3.
// Example 2:
words = ['a', 'a'];
s = 'aa';
console.log(countPrefixes(words, s));

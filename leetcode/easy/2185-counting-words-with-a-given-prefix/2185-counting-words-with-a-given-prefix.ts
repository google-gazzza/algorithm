/*
2185-counting-words-with-a-given-prefix
leetcode/easy/2185. Counting Words With a Given Prefix
Difficulty: easy
URL: https://leetcode.com/problems/counting-words-with-a-given-prefix/

NOTE: Description

NOTE: Constraints
  - 1 <= words.length <= 100
  - 1 <= words[i].length, pref.length <= 100
  - words[i] and pref consist of lowercase English letters.

NOTE: Explanation
*/

function prefixCount(words: string[], pref: string): number {
  return words.filter((e) => e.startsWith(pref)).length;
}

let words = ['pay', 'attention', 'practice', 'attend'];
let pref = 'at';
// Output: 2
console.log(prefixCount(words, pref));

words = ['leetcode', 'win', 'loops', 'success'];
pref = 'code';
console.log(prefixCount(words, pref));
// Output: 0
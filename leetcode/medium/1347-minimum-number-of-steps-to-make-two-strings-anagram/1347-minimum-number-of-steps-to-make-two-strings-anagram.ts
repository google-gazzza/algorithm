/*
1347-minimum-number-of-steps-to-make-two-strings-anagram
leetcode/medium/1347. Minimum Number of Steps to Make Two Strings Anagram
URL: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function minSteps(s: string, t: string): number {
  const charArrayA = s.split('');
  const charArrayB = t.split('');
  const charMap = {};

  for (let i = 0; i < charArrayA.length; i += 1) {
    charMap[charArrayA[i]] = charMap[charArrayA[i]] ? charMap[charArrayA[i]] + 1 : 1;
    charMap[charArrayB[i]] = charMap[charArrayB[i]] ? charMap[charArrayB[i]] - 1 : -1;
  }

  let result = 0;

  for (let key in charMap) {
    if (charMap[key] !== 0) {
      result += Math.abs(charMap[key]);
    }
  }

  return result / 2;
}

let s = 'bab';
let t = 'aba';
console.log(minSteps(s, t));
// Output: 1

s = 'leetcode';
t = 'practice';
console.log(minSteps(s, t));
// Output: 5

s = 'anagram';
t = 'mangaar';
console.log(minSteps(s, t));
// Output: 0

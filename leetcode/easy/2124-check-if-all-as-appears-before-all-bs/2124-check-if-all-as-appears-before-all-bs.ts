/*
2124-check-if-all-as-appears-before-all-bs
leetcode/easy/2124. Check if All A's Appears Before All B's
URL: https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function checkString(s: string): boolean {
  return s.lastIndexOf('a') < s.indexOf('b') || s.indexOf('b') === -1;
}

let s = 'aaabbb';
console.log(checkString(s));
// Output: true

s = 'abab';
console.log(checkString(s));
// Output: false

s = 'bbb';
console.log(checkString(s));
// Output: true
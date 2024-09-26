// leetcode/hard/10. Regular Expression Matching
// 10-regular-expression-matching
// URL: https://leetcode.com/problems/regular-expression-matching/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function isMatch(s: string, p: string): boolean {
  return new RegExp(`^${p}$`).test(s);
}

let s = "aa";
let p = "a";
console.log(isMatch(s, p));
// Output: false

s = "aa";
p = "a*";
console.log(isMatch(s, p));
// Output: true

"ab";
p = ".*";
console.log(isMatch(s, p));
// Output: true

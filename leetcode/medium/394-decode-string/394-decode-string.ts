/*
394-decode-string
leetcode/medium/394. Decode String
URL: https://leetcode.com/problems/decode-string/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function decodeString(s: string): string {
  while (/(\d+\[\w+])/.test(s)) {
    s = s.replace(/(\d+\[\w+])/, (match) => {
      let [num, str] = match.split('[');
      str = str.replace(']', '');
      return str.repeat(Number(num));
    });
  }

  return s;
}

let s = '3[a]2[bc]';
console.log(decodeString(s));
// Output: "aaabcbc"

s = '3[a2[c]]';
console.log(decodeString(s));
// Output: "accaccacc"

s = '2[abc]3[cd]ef';
console.log(decodeString(s));
// Output: "abcabccdcdcdef"

s = '"100[leetcode]"';
console.log(decodeString(s));

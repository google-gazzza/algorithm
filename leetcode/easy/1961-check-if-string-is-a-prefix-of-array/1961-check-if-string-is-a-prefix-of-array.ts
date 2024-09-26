/*
1961-check-if-string-is-a-prefix-of-array
leetcode/easy/1961. Check If String Is a Prefix of Array
URL: https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/
NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function isPrefixString(s: string, words: string[]): boolean {
  let concatWord = '';

  while (concatWord.length < s.length) {
    const word = words.shift();
    if (!word) {
      return false;
    }
    concatWord += word;
  }

  return concatWord === s;
}

let s = 'iloveleetcode';
let words = ['i', 'love', 'leetcode', 'apples'];
console.log(isPrefixString(s, words));
// Output: true
// Explanation:
//   s can be made by concatenating "i", "love", and "leetcode" together.
//   Example 2:

s = 'iloveleetcode';
words = ['apples', 'i', 'love', 'leetcode'];
console.log(isPrefixString(s, words));
// Output: false
// Explanation:
//   It is impossible to make s using a prefix of arr.

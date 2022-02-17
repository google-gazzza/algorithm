/*
345-reverse-vowels-of-a-string
leetcode/easy/345. Reverse Vowels of a String
Difficulty: easy
URL: https://leetcode.com/problems/reverse-vowels-of-a-string/

NOTE: Description

NOTE: Constraints
  1 <= s.length <= 3 * 105
  s consist of printable ASCII characters.

NOTE: Explanation
*/

function reverseVowels(s: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const collectedVowels = s.split('').filter((e) => vowels.includes(e));

  return s.split('')
    .map((e) => (vowels.includes(e) ? collectedVowels.pop() : e)).join('');
}

// Example 1:
//
let s = 'hello';
console.log(reverseVowels(s));
// Output: "holle"
// Example 2:
//
s = 'leetcode';
console.log(reverseVowels(s));
// Output: "leotcede"

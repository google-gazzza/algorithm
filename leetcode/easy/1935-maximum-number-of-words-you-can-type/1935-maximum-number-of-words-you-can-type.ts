/*
1935-maximum-number-of-words-you-can-type
leetcode/easy/1935. Maximum Number of Words You Can Type
Difficulty: easy
URL: https://leetcode.com/problems/maximum-number-of-words-you-can-type/

NOTE: Description

NOTE: Constraints
  - 1 <= text.length <= 104
  - 0 <= brokenLetters.length <= 26
  - text consists of words separated by a single space without any leading or trailing spaces.
  - Each word only consists of lowercase English letters.
  - brokenLetters consists of distinct lowercase English letters.

NOTE: Explanation
*/

function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenLetterSet = new Set(brokenLetters.split(''));

  return text.split(' ')
    .filter((word) => word.split('').every((letter) => !brokenLetterSet.has(letter))).length;
}

// Example 1:
//
let text = 'hello world';
let brokenLetters = 'ad';
console.log(canBeTypedWords(text, brokenLetters));
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
//   Example 2:
//
text = 'leet code';
brokenLetters = 'lt';
console.log(canBeTypedWords(text, brokenLetters));
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
//   Example 3:
//
text = 'leet code';
brokenLetters = 'e';
console.log(canBeTypedWords(text, brokenLetters));
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.

/*
408-valid-word-abbreviation
leetcode/easy/408. Valid Word Abbreviation
Difficulty: easy
URL: https://leetcode.com/problems/valid-word-abbreviation/

NOTE: Description

NOTE: Constraints
  1 <= word.length <= 20
  word consists of only lowercase English letters.
  1 <= abbr.length <= 10
  abbr consists of lowercase English letters and digits.
  All the integers in abbr will fit in a 32-bit integer.

NOTE: Explanation
*/

function validWordAbbreviation(word: string, abbr: string): boolean {
  let convertedAbbr: string = abbr.slice();

  for (const [num] of Array.from(abbr.matchAll(/\d+/g))) {
    if (num[0] === '0') {
      return false;
    }
    if (Number(num) > word.length) {
      return false;
    }
    convertedAbbr = convertedAbbr.replace(num, '*'.repeat(Number(num)));
  }

  if (convertedAbbr.length !== word.length) {
    return false;
  }

  return convertedAbbr.split('')
    .every((char, i) => word[i] === char || char === '*');
};

// Example 1:
//
let word = 'internationalization';
let abbr = 'i12iz4n';
console.log(validWordAbbreviation(word, abbr)); // true
// Output: true
// Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").
//   Example 2:
//
word = 'apple';
abbr = 'a2e';
console.log(validWordAbbreviation(word, abbr));
// Output: false
// Explanation: The word "apple" cannot be abbreviated as "a2e".

word = 'a';
abbr = '01';
console.log(validWordAbbreviation(word, abbr));

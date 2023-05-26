/*
1002-find-common-characters
leetcode/easy/1002. Find Common Characters
URL: https://leetcode.com/problems/find-common-characters/

NOTE: Description

NOTE: Constraints
  - 1 <= nums.length <= 1000
  - -100 <= nums[i] <= 100

NOTE: Explanation
*/

function commonChars(words: string[]): string[] {
  return words.reduce((acc, word) => {
    const wordChars = word.split('');

    return acc.split('').filter((char) => {
      if (wordChars.indexOf(char) !== -1) {
        wordChars.splice(wordChars.indexOf(char), 1);
        return true;
      }
      return false;
    }).join('');
  }, words[0]).split('');
}

// Example 1:
let words = ['bella', 'label', 'roller'];
console.log(commonChars(words));
// Output: ["e","l","l"]
// Example 2:
//
words = ['cool', 'lock', 'cook'];
console.log(commonChars(words));
// Output: ["c","o"]

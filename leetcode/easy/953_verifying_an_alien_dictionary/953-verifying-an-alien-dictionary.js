/*
953_verifying_an_alien_dictionary

# leetcode/easy/953. Verifying an Alien Dictionary
Difficulty: easy
URL: https://leetcode.com/problems/verifying-an-alien-dictionary/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const isAlienSorted = function (words, order) {
  const copiedArray = words.slice();

  copiedArray.sort((comparisonTarget, currunt) => {
    let result = 0;

    [...currunt].some((e, i) => {
      const currentCharIndex = order.indexOf(e);
      const comparisonTargetCharIndex = order.indexOf(comparisonTarget[i]);

      if (comparisonTargetCharIndex === -1) {
        result = -1;
        return true;
      }

      if (comparisonTargetCharIndex - currentCharIndex) {
        result = comparisonTargetCharIndex - currentCharIndex;
        return true;
      }
    });

    return result;
  });

  return JSON.stringify(copiedArray) === JSON.stringify(words);
};


test('test', () => {
  expect(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")).toBeTruthy();
  // Output: true
  // Explanation: As 'h' comes before 'l' in this language,
  // then the sequence is sorted.

  expect(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")).toBeFalsy();
  // Output: false
  // Explanation: As 'd' comes after 'l' in this language,
  // then words[0] > words[1], hence the sequence is unsorted.

  expect(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")).toBeFalsy();
  // Output: false
  // Explanation: The first three characters "app" match,
  // and the second string is shorter (in size.)
  // According to lexicographical rules "apple" > "app",
  // because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

  expect(isAlienSorted(["aa", "a"], "abqwertyuioplkjhgfdszxcvnm")).toBeFalsy();
});

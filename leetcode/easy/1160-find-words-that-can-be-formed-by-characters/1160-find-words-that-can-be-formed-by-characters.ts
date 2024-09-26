/*
1160-find-words-that-can-be-formed-by-characters
leetcode/easy/1160. Find Words That Can Be Formed by Characters
URL: https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

NOTE: Description

NOTE: Constraints
  - 1 <= words.length <= 1000
  - 1 <= words[i].length, chars.length <= 100
  - words[i] and chars consist of lowercase English letters.

NOTE: Explanation
*/

function getStringCharCounts(chars: string): Map<string, number> {
  const charCountMap = new Map<string, number>();

  chars.split('')
    .forEach((char) => {
      if (charCountMap.has(char)) {
        charCountMap.set(char, charCountMap.get(char) + 1);
      } else {
        charCountMap.set(char, 1);
      }
    });

  return charCountMap;
}

function aIsSubsetOfB(a: Map<string, number>, b: Map<string, number>): boolean {
  for (const [key, value] of Array.from(a.entries())) {
    if (!b.has(key) || b.get(key) < value) {
      return false;
    }
  }

  return true;
}

function countCharacters(words: string[], chars: string): number {
  const targetCount = getStringCharCounts(chars);

  return words.reduce((acc, cur) => {
    if (aIsSubsetOfB(getStringCharCounts(cur), targetCount)) {
      return acc + cur.length;
    }
    return acc;
  }, 0);
}

let words = ['cat', 'bt', 'hat', 'tree'];
let chars = 'atach';
// Output: 6
console.log(countCharacters(words, chars));

words = ['hello', 'world', 'leetcode'];
chars = 'welldonehoneyr';
// Output: 10
console.log(countCharacters(words, chars));

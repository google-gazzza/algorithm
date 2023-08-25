// leetcode/easy/884. Uncommon Words from Two Sentences
// 884-uncommon-words-from-two-sentences
// URL: https://leetcode.com/problems/minimum-string-length-after-removing-substrings/

function countingWord(map: Map<string, number>, word: string) {
  if (map.has(word)) {
    map.set(word, map.get(word) + 1);
  } else {
    map.set(word, 1);
  }

  return map;
}

function uncommonFromSentences(s1: string, s2: string): string[] {
  const countMap = new Map<string, number>();

  s1.split(' ').reduce(countingWord, countMap);
  s2.split(' ').reduce(countingWord, countMap);

  return Array.from(countMap.entries())
    .filter(([_, value]) => value === 1)
    .map(([key, _]) => key);
}

let s1 = 'this apple is sweet';
let s2 = 'this apple is sour';
console.log(uncommonFromSentences(s1, s2));
// Output: ['sweet','sour']

s1 = 'apple apple';
s2 = 'banana';
console.log(uncommonFromSentences(s1, s2));
// Output: ['banana']

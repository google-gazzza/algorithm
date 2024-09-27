/*
2085-count-common-words-with-one-occurrence
leetcode/easy/2085. Count Common Words With One Occurrence
Difficulty: easy
URL: https://leetcode.com/problems/count-common-words-with-one-occurrence/
 */


type CountingMap = Map<string, number>

function countingToMap(words: string[]): CountingMap {
  const map = new Map<string, number>();

  for (const word of words) {
    if (!map.has(word)) {
      map.set(word, 0);
    }

    map.set(word, map.get(word) + 1);
  }

  return map;
}

function countWords(words1: string[], words2: string[]): number {
  let count: number = 0;
  const words1CountMap: CountingMap = countingToMap(words1);
  const words2CountMap: CountingMap = countingToMap(words2);

  for (const key of Array.from(words1CountMap.keys())) {
    if (words1CountMap.get(key) === 1 && words2CountMap.get(key) === 1) {
      count += 1;
    }
  }

  return count;
};


let words1 = ['leetcode', 'is', 'amazing', 'as', 'is'];
let words2 = ['amazing', 'leetcode', 'is'];
// 2
console.log(countWords(words1, words2));


words1 = ['b', 'bb', 'bbb'];
words2 = ['a', 'aa', 'aaa'];
// Output: 0
console.log(countWords(words1, words2));


words1 = ['a', 'ab'];
words2 = ['a', 'a', 'a', 'ab'];
// Output: 1
console.log(countWords(words1, words2));

// leetcode/hard/30. Substring with Concatenation of All Words
// 30-substring-with-concatenation-of-all-words
// URL: https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/

function isPossiblePermustation(word: string, words: string[]): boolean {
  const wordsCopy = [...words];
  const wordLength = words[0].length;

  for (let i = 0; i < word.length; i += 1) {
    const char = word.substring(i, i + wordLength);

    if (wordsCopy.includes(char)) {
      wordsCopy.splice(wordsCopy.indexOf(char), 1);
      i += wordLength - 1;
    } else {
      return false;
    }
  }

  if (wordsCopy.length === 0) {
    return true;
  }
}

function findSubstring(s: string, words: string[]): number[] {
  const resultIndexes: number[] = [];
  const wordLength = words[0].length;
  const wordTotalLength = wordLength * words.length;

  if (words.length === 0) {
    return resultIndexes;
  }

  for (let i = 0; i <= s.length - wordTotalLength; i += 1) {
    const word = s.slice(i, i + wordTotalLength);

    if (isPossiblePermustation(word, words)) {
      resultIndexes.push(i);
    }
  }

  return resultIndexes;
}

let s = 'barfoothefoobarman';
let words = ['foo', 'bar'];
console.log(findSubstring(s, words));
// Output: [0,9]

// isPossiblePermustation('barfoo', ['foo', 'bar']);

s = "wordgoodgoodgoodbestword";
words = ["word", "good", "best", "good"];
console.log(findSubstring(s, words));
// 8

// leetcode/easy/1065. Index Pairs of a String
// 1065-index-pairs-of-a-string
// URL: https://leetcode.com/problems/count-distinct-numbers-on-board/description/

function indexPairs(text: string, words: string[]): number[][] {
  const result: number[][] = [];

  words.forEach((word) => {
    let index = text.indexOf(word);

    while (index !== -1) {
      result.push([index, index + word.length - 1]);
      index = text.indexOf(word, index + 1);
    }
  });

  result.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  return result;
}

let text = 'thestoryofleetcodeandme';
let words = ['story', 'fleet', 'leetcode'];
console.log(indexPairs(text, words));
// Output: [[3,7],[9,13],[10,17]]

text = 'ababa';
words = ['aba', 'ab'];
console.log(indexPairs(text, words));
// Output: [[0,1],[0,2],[2,3],[2,4]]

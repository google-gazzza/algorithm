/*
1048-longest-string-chain
leetcode/medium/1048. Longest String Chain
URL: https://leetcode.com/problems/longest-string-chain/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function isStringChain(a: string, b: string): boolean {
  if (a.length + 1 !== b.length) {
    return false;
  }

  const aArray = a.split('');
  const bArray = b.split('');

  for (let i = 0; i < bArray.length; i += 1) {
    if (aArray[i] !== bArray[i]) {
      return aArray.join('') === bArray.slice(0, i).concat(bArray.slice(i + 1)).join('');
    }
  }

  return false;
}

function longestStrChain(words: string[]): number {
  words.sort((a, b) => a.length - b.length);
  const dp: number[] = new Array(words.length).fill(1);

  for (let i = 0; i < words.length - 1; i += 1) {
    for (let j = i + 1; j < words.length; j += 1) {
      if (isStringChain(words[i], words[j])) {
        dp[j] = Math.max(dp[i] + 1, dp[j]);
      }
    }
  }

  return Math.max(...dp);
}

let words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca'];
console.log(longestStrChain(words));
// // Output: 4
//
words = ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'];
console.log(longestStrChain(words));
// // Output: 5
//
words = ['abcd', 'dbqca'];
console.log(longestStrChain(words));
// // Output: 1
//
words = ['a', 'ab', 'ac', 'bd', 'abc', 'abd', 'abdd'];
console.log(longestStrChain(words));
// // 4

words = ['a', 'ab', 'ac', 'bd', 'abc', 'abd', 'abdd'];
console.log(longestStrChain(words));
// 4

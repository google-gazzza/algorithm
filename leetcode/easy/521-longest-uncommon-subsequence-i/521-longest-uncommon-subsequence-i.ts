// leetcode/easy/521. Longest Uncommon Subsequence I
// 521-longest-uncommon-subsequence-i
// URL: https://leetcode.com/problems/longest-uncommon-subsequence-i/description/

function findLUSlength(a: string, b: string): number {
  if (a === b) {
    return -1;
  }
  return Math.max(a.length, b.length);
};

let a = 'aba';
let b = 'cdc';
console.log(findLUSlength(a, b));
// Output: 3;

a = 'aaa', b = 'bbb';
console.log(findLUSlength(a, b));
// Output: 3

a = 'aaa', b = 'aaa';
console.log(findLUSlength(a, b));

// Output: -1
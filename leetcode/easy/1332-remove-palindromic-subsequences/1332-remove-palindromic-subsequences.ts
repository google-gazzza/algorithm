// leetcode/easy/1332. Remove Palindromic Subsequences
// 1332-remove-palindromic-subsequences
// URL: https://leetcode.com/problems/remove-palindromic-subsequences/description/

function removePalindromeSub(s: string): number {
  const arr = s.split('');

  if (arr.reverse().join('') === s) {
    return 1;
  }

  return 2;
}

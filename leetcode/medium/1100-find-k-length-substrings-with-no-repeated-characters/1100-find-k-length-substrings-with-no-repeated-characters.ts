/*
# leetcode/medium/1100. Find K-Length Substrings With No Repeated Characters
# 1100-find-k-length-substrings-with-no-repeated-characters
# URL: https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function numKLenSubstrNoRepeats(s: string, k: number): number {
  if (s.length < k) {
    return 0;
  }

  const charCountMap: Map<string, number> = new Map<string, number>();

  for (let i = 0; i < k - 1; i++) {
    const char = s[i];
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  let count = 0;

  for (let i = k - 1; i < s.length; i += 1) {
    const char = s[i];
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);

    if (charCountMap.size === k) {
      count += 1;
    }

    const charToRemove = s[i - (k - 1)];
    const value = charCountMap.get(charToRemove);

    if (value === 1) {
      charCountMap.delete(charToRemove);
    } else {
      charCountMap.set(charToRemove, charCountMap.get(charToRemove) - 1);
    }
  }

  return count;
}

let s = 'havefunonleetcode';
let k = 5;
console.log(numKLenSubstrNoRepeats(s, k)); // Output: 6
// Output: 6

s = 'home';
k = 5;
// console.log(numKLenSubstrNoRepeats(s, k)); // Output: 6
// Output: 0;

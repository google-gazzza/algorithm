/*
1446-consecutive-characters
leetcode/easy/1446. Consecutive Characters
URL: https://leetcode.com/problems/consecutive-characters/

NOTE: Description

NOTE: Constraints
  - 1 <= s.length <= 500
  - s consists of only lowercase English letters.

NOTE: Explanation
*/

function maxPower(s: string): number {
  let max = 0;
  let targetChar = s[0];
  let consecutiveCount = 1;

  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === targetChar) {
      consecutiveCount += 1;
    } else {
      max = Math.max(max, consecutiveCount);
      consecutiveCount = 1;
      targetChar = s[i];
    }
  }

  return max;
}

let s = 'leetcode';
console.log(maxPower(s));
// Output: 2

s = 'abbcccddddeeeeedcba';
console.log(maxPower(s));
// Output: 5
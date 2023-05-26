/*
796-rotate-string
leetcode/easy/796. Rotate String
URL: https://leetcode.com/problems/rotate-string/

NOTE: Description

NOTE: Constraints
  - 1 <= s.length, goal.length <= 100
  - S and goal consist of lowercase English letters.

NOTE: Explanation
*/

function rotateString(s: string, goal: string): boolean {
  const a = s.split('');
  const b = goal.split('');

  for (let i = 0; i < s.length; i += 1) {
    if (a[i] === b[i] && a.join('') === b.join('')) {
      return true;
    }
    a.push(a.shift());
  }

  return false;
}

let s = 'abcde';
let goal = 'cdeab';
console.log(rotateString(s, goal));
// Output: true

s = 'abcde';
goal = 'abced';
console.log(rotateString(s, goal));
// Output: false

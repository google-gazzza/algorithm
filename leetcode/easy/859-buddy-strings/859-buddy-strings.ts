/*
859-buddy-strings
leetcode/easy/859. Buddy Strings
URL: https://leetcode.com/problems/buddy-strings/
NOTE: Description

NOTE: Constraints
  - 1 <= s.length, goal.length <= 2 * 104
  - s and goal consist of lowercase letters.
NOTE: Explanation
*/

function buddyStrings(a: string, b: string): boolean {
  let sameCount = 0;
  const diffIndexes: number[] = [];

  if (a.length < b.length) {
    [a, b] = [b, a];
  }

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      diffIndexes.push(i);
    } else {
      sameCount += 1;
    }
  }

  if (diffIndexes.length === 0 && sameCount >= 2) {
    for (let i = 0; i < a.length; i += 1) {
      if (b.lastIndexOf(a[i]) !== i) {
        return true;
      }
    }
  }

  if (diffIndexes.length === 2
    && a[diffIndexes[0]] === b[diffIndexes[1]] && a[diffIndexes[1]] === b[diffIndexes[0]]) {
    return true;
  }

  return false;
};

let s = 'ab';
let goal = 'ba';
console.log(buddyStrings(s, goal));
// true

s = 'ab';
goal = 'ab';
console.log(buddyStrings(s, goal));
// false

s = 'aa';
goal = 'aa';
console.log(buddyStrings(s, goal));
// true

s = 'ab';
goal = 'babbb';
console.log(buddyStrings(s, goal));

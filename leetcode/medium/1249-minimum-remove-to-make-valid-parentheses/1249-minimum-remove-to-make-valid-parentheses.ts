/*
1249-minimum-remove-to-make-valid-parentheses
leetcode/easy/1249. Minimum Remove to Make Valid Parentheses
Difficulty: easy
URL: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

NOTE: Description

NOTE: Constraints
  - 1 <= s.length, t.length <= 200
  - s and t only contain lowercase letters and '#' characters.

NOTE: Explanation
*/

function minRemoveToMakeValid(s: string): string {
  const arr = s.split('');
  const leftProcess = [];
  const result = [];
  let openCount = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '(') {
      openCount += 1;
    }

    if (arr[i] === ')') {
      if (openCount === 0) {
        continue;
      }
      openCount -= 1;
    }

    leftProcess.push(arr[i]);
  }

  openCount = 0;

  for (let i = leftProcess.length - 1; i >= 0; i -= 1) {
    if (leftProcess[i] === ')') {
      openCount -= 1;
    }
    if (leftProcess[i] === '(') {
      if (openCount === 0) {
        continue;
      }
      openCount += 1;
    }

    result.unshift(leftProcess[i]);
  }

  return result.join('');
};

// Example 1:
//
let s = 'lee(t(c)o)de)';
console.log(minRemoveToMakeValid(s));
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
//   Example 2:
//
s = 'a)b(c)d';
console.log(minRemoveToMakeValid(s));
// Output: "ab(c)d"
// Example 3:
//
s = '))((';
console.log(minRemoveToMakeValid(s));
// Output: ""
// Explanation: An empty string is also valid.

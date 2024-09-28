/*
844-backspace-string-compare
leetcode/easy/844. Backspace String Compare
Difficulty: easy
URL: https://leetcode.com/problems/backspace-string-compare/

NOTE: Description

NOTE: Constraints
  - 1 <= s.length, t.length <= 200
  - s and t only contain lowercase letters and '#' characters.

NOTE: Explanation
*/


function processBackSpace(s: string): string {
  const result: string[] = s.split('');

  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === '#') {
      if (i === 0) {
        result.splice(0, 1);
      } else {
        result.splice(i - 1, 2);
      }
      i = Math.max(-1, i - 2);
    }
  }

  return result.join();
}

function backspaceCompare(s: string, t: string): boolean {
  return processBackSpace(s) === processBackSpace(t);
}

function removeBackspaceRecursive(s: string[]): string {
  const index = s.indexOf('#');
  if (index === -1) {
    return s.join('');
  }

  if (index === 0) {
    s.splice(0, 1);
  } else {
    s.splice(index - 1, 2);
  }

  return removeBackspaceRecursive(s);
}

function backspaceCompare(s: string, t: string): boolean {
  return removeBackspaceRecursive(s.split('')) === removeBackspaceRecursive(t.split(''));
}


let s = 'ab#c';
let t = 'ad#c';
console.log(backspaceCompare(s, t));
// Output: true
// Explanation: Both s and t become "ac".

s = 'ab##';
t = 'c#d#';
console.log(backspaceCompare(s, t));
// Output: true
// Explanation: Both s and t become "".

s = 'a#c';
t = 'b';
console.log(backspaceCompare(s, t));
// Output: false
// Explanation: s becomes "c" while t becomes "b".

s = 'a##c';
t = '#a#c';
console.log(backspaceCompare(s, t));
// expected : true

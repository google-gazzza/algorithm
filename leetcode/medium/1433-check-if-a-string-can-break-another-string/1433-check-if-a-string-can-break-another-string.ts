/*
leetcode/medium/1433. Check If a String Can Break Another String
1433-check-if-a-string-can-break-another-string
uRL: https://leetcode.com/problems/check-if-a-string-can-break-another-string/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function checkIfCanBreak(s1: string, s2: string): boolean {
  const s1Arr = s1.split('').sort();
  const s2Arr = s2.split('').sort();

  let s1Break = true;
  let s2Break = true;

  for (let i = 0; i < s1Arr.length; i += 1) {
    if (s1Arr[i] < s2Arr[i]) {
      s1Break = false;
    }
    if (s1Arr[i] > s2Arr[i]) {
      s2Break = false;
    }
  }
  return s1Break || s2Break;
}

let s1 = 'abc';
let s2 = 'xya';
console.log(checkIfCanBreak(s1, s2));
// Output: true

s1 = 'abe';
s2 = 'acd';
console.log(checkIfCanBreak(s1, s2));
// Output: false;

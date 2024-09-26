/*
1427-perform-string-shifts
leetcode/easy/1427. Perform String Shifts
URL: https://leetcode.com/problems/perform-string-shifts/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function stringShift(s: string, shift: number[][]): string {
  const charArray = s.split('');

  shift.forEach(([direction, amount]) => {
    for (let i = 0; i < amount; i += 1) {
      if (direction === 0) {
        charArray.push(charArray.shift());
      } else {
        charArray.unshift(charArray.pop());
      }
    }
  });

  return charArray.join('');
}

let s = 'abc';
let shift = [[0, 1], [1, 2]];
console.log(stringShift(s, shift));
// Output: "cab"

s = 'abcdefg';
shift = [[1, 1], [1, 1], [0, 2], [1, 3]];
console.log(stringShift(s, shift));
// Output: "efgabcd"

s = 'abc';
shift = [[0, 4]];
console.log(stringShift(s, shift));

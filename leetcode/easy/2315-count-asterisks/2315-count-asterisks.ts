/*
2315-count-asterisks
leetcode/easy/2315. Count Asterisks
URL: https://leetcode.com/problems/count-asterisks/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function countAsterisks(s: string): number {
  return s.split('|').reduce((acc, curr, i) => {
    if (i % 2 === 0) {
      for (let j = 0; j < curr.length; j++) {
        if (curr[j] === '*') {
          acc += 1;
        }
      }
    }
    return acc;
  }, 0);
};

let s = 'l|*e*et|c**o|*de|';
console.log(countAsterisks(s));
// Output: 2

s = 'iamprogrammer';
console.log(countAsterisks(s));
// Output: 0

s = 'yo|uar|e**|b|e***au|tifu|l';
console.log(countAsterisks(s));
// Output: 5

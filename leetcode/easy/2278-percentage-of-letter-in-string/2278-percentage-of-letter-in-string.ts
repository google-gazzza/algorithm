/*
2278-percentage-of-letter-in-string
leetcode/easy/2278. Percentage of Letter in String
URL: https://leetcode.com/problems/percentage-of-letter-in-string/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function percentageLetter(s: string, letter: string): number {
  return Math.floor(s.split('').filter(x => x === letter).length / s.length * 100);
};

let s = 'foobar';
let letter = 'o';
console.log(percentageLetter(s, letter));

s = 'jjjj';
letter = 'k';
console.log(percentageLetter(s, letter));

s = 'kue';
letter = 'e';
console.log(percentageLetter(s, letter));

/*
2042-check-if-numbers-are-ascending-in-a-sentence
leetcode/easy/2042. Check if Numbers Are Ascending in a Sentence
URL: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function areNumbersAscending(s: string): boolean {
  const filteredNums = s.split(' ')
    .filter((x) => Number.isInteger(Number(x)))
    .map((x) => Number(x));

  return !filteredNums.some((x, i) => x >= filteredNums[i + 1]);
}

let s = '1 box has 3 blue 4 red 6 green and 12 yellow marbles';
console.log(areNumbersAscending(s));
// Output: true
// Explanation: The numbers in s are: 1, 3, 4, 6, 12.
// They are strictly increasing from left to right: 1 < 3 < 4 < 6 < 12.

s = 'sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s';
console.log(areNumbersAscending(s));
// Output: false
// Explanation: The numbers in s are: 7, 51, 50, 60. They are not strictly increasing.


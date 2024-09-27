/*
1796-second-largest-digit-in-a-string
leetcode/easy/1796. Second Largest Digit in a String
URL: https://leetcode.com/problems/second-largest-digit-in-a-string/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function secondHighest(s: string): number {
  const filtredNums = s.split('')
    .map(Number)
    .filter((e) => Number.isInteger(Number(e)));
  const sortedNums = Array.from(new Set(filtredNums)).sort((a, b) => a - b);
  sortedNums.pop();

  if (sortedNums.length) {
    return sortedNums.pop();
  }

  return -1;
}

let s = 'dfa12321afd';
console.log(secondHighest(s)); // 2
// Output: 2
s = 'abc1111';
console.log(secondHighest(s)); // 1
// Output: -1

s = 'ck077';
console.log(secondHighest(s)); // 1

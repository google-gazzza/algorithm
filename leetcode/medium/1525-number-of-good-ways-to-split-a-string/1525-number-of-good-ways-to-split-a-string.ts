/*
1525-number-of-good-ways-to-split-a-string
leetcode/medium/1525. Number of Good Ways to Split a String
URL: https://leetcode.com/problems/number-of-good-ways-to-split-a-string/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function numSplits(s: string): number {
  const rightString: string[] = s.split('');
  const leftSet = new Set();
  const rightSet = new Set(rightString);
  let result = 0;

  while (rightString.length > 0) {
    const target = rightString.shift();
    leftSet.add(target);

    if (rightString.indexOf(target) === -1) {
      rightSet.delete(target);
    }

    if (leftSet.size === rightSet.size) {
      result += 1;
    }
  }

  return result;
}

let s = 'aacaba';
console.log(numSplits(s));
// Output: 2

s = 'abcd';
console.log(numSplits(s));
// Output: 1

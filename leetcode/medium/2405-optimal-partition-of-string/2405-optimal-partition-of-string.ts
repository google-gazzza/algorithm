/*
leetcode/medium/2405. Optimal Partition of String
2405-optimal-partition-of-string
uRL: https://leetcode.com/problems/optimal-partition-of-string/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function partitionString(s: string): number {
  let count = 1;

  for (let i = 0; i < s.length; i += 1) {
    const subStringMap = new Map();

    for (let j = i; j <= s.length; j += 1) {
      if (subStringMap.has(s[j])) {
        count += 1;
        i = j - 1;
        break;
      }

      subStringMap.set(s[j], true);
    }
  }

  return count;
}

let s = 'abacaba';
console.log(partitionString(s));
// Output: 4

s = 'ssssss';
console.log(partitionString(s));
// Output: 6

s = 'hdklqkcssgxlvehva';
console.log(partitionString(s));

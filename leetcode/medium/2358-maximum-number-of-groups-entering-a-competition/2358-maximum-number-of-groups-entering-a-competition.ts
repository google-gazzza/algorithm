/*
2358-maximum-number-of-groups-entering-a-competition
leetcode/medium/2358. Maximum Number of Groups Entering a Competition
URL: https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function maximumGroups(grades: number[]): number {
  grades.sort((a, b) => a - b);

  let lastSize = 1;
  let count = 0;

  while (grades.length >= lastSize) {
    grades.splice(0, lastSize);
    lastSize += 1;
    count += 1;
  }

  return count;
}

let grades = [10, 6, 12, 7, 3, 5];
console.log(maximumGroups(grades));
// Output: 3

grades = [8, 8];
console.log(maximumGroups(grades));
// Output: 1

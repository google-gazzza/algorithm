/*
1441-build-an-array-with-stack-operations
leetcode/easy/1441. Build an Array With Stack Operations
URL: https://leetcode.com/problems/build-an-array-with-stack-operations/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function buildArray(target: number[], n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i < n + 1; i += 1) {
    if (target.length === 0) {
      break;
    }
    if (target[0] === i) {
      result.push('Push');
      target.shift();
    } else {
      result.push('Push');
      result.push('Pop');
    }
  }

  return result;
}

let target = [1, 3];
let n = 3;
console.log(buildArray(target, n));

target = [1, 2, 3];
n = 3;
console.log(buildArray(target, n));
// Output: ["Push","Push","Push"]
// Example 3:
//
target = [1, 2];
n = 4;
console.log(buildArray(target, n));
// Output: ["Push","Push"]


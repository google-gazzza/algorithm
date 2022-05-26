/*
2169-count-operations-to-obtain-zero
leetcode/medium/2169. Count Operations to Obtain Zero
URL: https://leetcode.com/problems/count-operations-to-obtain-zero/

NOTE: Description
NOTE: Constraints
  - 0 <= num1, num2 <= 105

NOTE: Explanation
NOTE: Reference
*/

function countOperations(num1: number, num2: number): number {
  let bigger = Math.max(num1, num2);
  let smaller = Math.min(num1, num2);
  let count = 0;

  while (smaller !== 0) {
    bigger -= smaller;
    [bigger, smaller] = [Math.max(bigger, smaller), Math.min(bigger, smaller)];
    count += 1;
  }

  return count;
}

// Example 1:
let num1 = 2;
let num2 = 3;
console.log(countOperations(num1, num2));
// Output: 3
// Explanation:
//   - Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
//   - Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
// - Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
//   Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
//   So the total number of operations required is 3.
// Example 2:

num1 = 10;
num2 = 10;
console.log(countOperations(num1, num2));
// Output: 1
// Explanation:
//   - Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.
// Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.
//   So the total number of operations required is 1.
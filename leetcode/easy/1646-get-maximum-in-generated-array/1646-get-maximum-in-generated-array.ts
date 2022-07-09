/*
1646-get-maximum-in-generated-array
leetcode/easy/1646. Get Maximum in Generated Array
URL: https://leetcode.com/problems/get-maximum-in-generated-array/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function getMaximumGenerated(n: number): number {
  if (n === 0) {
    return 0;
  }

  const nums = [0, 1];

  let oddIndex = 1;
  let evenIndex = 1;

  for (let i = 2; i <= n; i += 1) {
    if (i % 2 === 0) {
      nums.push(nums[oddIndex]);
      oddIndex += 1;
    } else {
      nums.push(nums[evenIndex] + nums[evenIndex + 1]);
      evenIndex += 1;
    }
  }

  return Math.max(...nums);
}

let n = 7;
console.log(getMaximumGenerated(n));
// Output: 3

n = 2;
console.log(getMaximumGenerated(n));
// Output: 1

n = 3;
console.log(getMaximumGenerated(n));
// Output: 2

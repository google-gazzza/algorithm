/*
1991-find-the-middle-index-in-array
leetcode/easy/1991. Find the Middle Index in Array
URL: https://leetcode.com/problems/find-the-middle-index-in-array/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function findMiddleIndex(nums: number[]): number {
  let leftSum = 0;
  let rightSum = nums.slice(1).reduce((acc, curr) => acc + curr, 0);

  for (let i = 0; i < nums.length; i += 1) {
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
    rightSum -= nums[i + 1];
  }

  return -1;
}

let nums = [2, 3, -1, 8, 4];
console.log(findMiddleIndex(nums));
// Output: 3

nums = [1, -1, 4];
console.log(findMiddleIndex(nums));
// Output: 2

nums = [2, 5];
console.log(findMiddleIndex(nums));
// -1

nums = [0];
console.log(findMiddleIndex(nums));
// 0

nums = [1, 0];
console.log(findMiddleIndex(nums));
// 0

nums = [0, 1, 2, 0];
console.log(findMiddleIndex(nums));
// Output: -1

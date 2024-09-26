/*
2161-partition-array-according-to-given-pivot
leetcode/easy/2161. Partition Array According to Given Pivot
Difficulty: medium
URL: https://leetcode.com/problems/partition-array-according-to-given-pivot/

NOTE: Description

NOTE: Constraints
  - 1 <= nums.length <= 105
  - -106 <= nums[i] <= 106
  - pivot equals to an element of nums.

NOTE: Explanation
*/

function pivotArray(nums: number[], pivot: number): number[] {
  const left: number[] = [];
  const right: number[] = [];
  const middle: number[] = [];

  nums.forEach((e) => {
    if (e < pivot) {
      left.push(e);
    } else if (e > pivot) {
      right.push(e);
    } else {
      middle.push(e);
    }
  });

  return left.concat(middle, right);
};

let nums = [9, 12, 5, 10, 14, 3, 10], pivot = 10;
console.log(pivotArray(nums, pivot));
// Output: [9,5,3,10,10,12,14]

nums = [-3, 4, 3, 2], pivot = 2;
console.log(pivotArray(nums, pivot));
// Output: [-3,2,4,3]

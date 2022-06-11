/*
213-house-robber-ii
leetcode/medium/213. House Robber II
URL: https://leetcode.com/problems/house-robber-ii/

NOTE: Description
NOTE: Constraints
  - 1 <= nums.length <= 100
  - 0 <= nums[i] <= 1000
NOTE: Explanation
NOTE: Reference
*/

function backwardMax(list) {
  for (let i = 0; i < list.length; i += 1) {
    list[i] = Math.max(list[i - 2] || 0, list[i - 3] || 0) + list[i];
  }

  return Math.max(...list.slice(-2));
}

function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  const houseList1 = nums.slice(1);
  const houseList2 = nums.slice(0, -1);

  return Math.max(backwardMax(houseList1), backwardMax(houseList2));
}

let nums = [2, 3, 2];
console.log(rob(nums));

nums = [1, 2, 3, 1];
console.log(rob(nums));

nums = [1, 2, 3];
console.log(rob(nums));

nums = [0];
console.log(rob(nums));

nums = [200, 3, 140, 20, 10];
console.log(rob(nums));

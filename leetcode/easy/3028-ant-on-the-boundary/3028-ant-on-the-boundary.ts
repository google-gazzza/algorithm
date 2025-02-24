// leetcode/easy/3028. Ant on the Boundary
// 3028-ant-on-the-boundary
// URL: https://leetcode.com/problems/ant-on-the-boundary/description/

function returnToBoundaryCount(nums: number[]): number {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];

    if (sum === 0) {
      count += 1;
    }
  }

  return count;
};

let nums = [2, 3, -5];
console.log(returnToBoundaryCount(nums));
//?
// Output: 1

nums = [3, 2, -3, -4];
console.log(returnToBoundaryCount(nums));
//?
// Output: 0

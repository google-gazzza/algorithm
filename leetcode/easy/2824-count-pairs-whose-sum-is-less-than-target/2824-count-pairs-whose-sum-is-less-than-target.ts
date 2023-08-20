// leetcode/easy/2824. Count Pairs Whose Sum is Less than Target
// 2824-count-pairs-whose-sum-is-less-than-target
// URL: https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/

function countPairs(nums: number[], target: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] < target) {
        count += 1;
      }
    }
  }

  return count;
}

let nums = [-1, 1, 2, 3, 1];
let target = 2;
console.log(countPairs(nums, target));
// Output: 3

nums = [-6, 2, 5, -2, -7, -1, 3];
target = -2;
console.log(countPairs(nums, target));
// Output: 10

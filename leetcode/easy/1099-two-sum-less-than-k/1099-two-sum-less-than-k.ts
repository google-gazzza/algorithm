// leetcode/easy/1099. Two Sum Less Than K
// 1099-two-sum-less-than-k
// URL: https://leetcode.com/problems/two-sum-less-than-k/description/

function twoSumLessThanK(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let max = -1;

  while (nums.length > 0 && nums[rightIndex] >= k) {
    rightIndex -= 1;
  }

  while (leftIndex < rightIndex) {
    const sum = nums[leftIndex] + nums[rightIndex];

    if (sum < k) {
      max = Math.max(max, sum);
      leftIndex += 1;
    } else {
      rightIndex -= 1;
    }
  }

  return max;
}

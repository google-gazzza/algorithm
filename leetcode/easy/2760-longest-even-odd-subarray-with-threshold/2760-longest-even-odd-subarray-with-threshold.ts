// leetcode/easy/2760. Longest Even Odd Subarray With Threshold
// 2760-longest-even-odd-subarray-with-threshold
// URL: https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/description/

function longestAlternatingSubarray(nums: number[], threshold: number): number {
  // nums[l] % 2 == 0
  // For all indices i in the range [l, r - 1], nums[i] % 2 != nums[i + 1] % 2
  // For all indices i in the range [l, r], nums[i] <= threshold
  let max = 0;

  for (let l = 0; l < nums.length; l++) {
    if (nums[l] % 2 == 0) {
      for (let r = l; r < nums.length; r++) {
        if (nums[r] > threshold) {
          break;
        }
        if (nums[r] % 2 !== nums[r + 1] % 2) {
          max = Math.max(max, r - l + 1);
        } else {
          max = Math.max(max, r - l + 1);
          break;
        }
      }
    }
  }

  return max;
};

let nums = [3, 2, 5, 4];
let threshold = 5;
console.log(longestAlternatingSubarray(nums, threshold));
// Output: 3;

nums = [1, 2];
threshold = 2;
console.log(longestAlternatingSubarray(nums, threshold));
// Output: 1;

nums = [2, 3, 4, 5];
threshold = 4;
console.log(longestAlternatingSubarray(nums, threshold));
// Output: 3;

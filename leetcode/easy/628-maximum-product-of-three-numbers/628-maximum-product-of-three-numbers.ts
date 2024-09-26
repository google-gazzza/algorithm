/*
628-maximum-product-of-three-numbers
leetcode/easy/628. Maximum Product of Three Numbers
URL: https://leetcode.com/problems/maximum-product-of-three-numbers/

NOTE: Description

NOTE: Constraints
  - 3 <= nums.length <= 104
  - -1000 <= nums[i] <= 1000

NOTE: Explanation
*/

function maximumProduct(nums: number[]): number {
  const positive = nums.filter((n) => n > 0);
  const negative = nums.filter((n) => n <= 0);

  positive.sort((a, b) => b - a);
  negative.sort((a, b) => a - b);

  const candidate1 = positive[0] * positive[1] * positive[2];
  const candidate2 = negative[0] * negative[1] * positive[0];
  const candidate3 = negative.pop() * negative.pop() * negative.pop();
  const candidates = [candidate1, candidate2, candidate3].filter((n) => !Number.isNaN(n));
  const max = Math.max(...candidates);

  if (max < 0 && nums.indexOf(0) !== -1) {
    return 0;
  }

  return max;
}

let nums = [1, 2, 3];
console.log(maximumProduct(nums));
// Output: 6

nums = [1, 2, 3, 4];
console.log(maximumProduct(nums));
// Output: 24

nums = [-1, -2, -3];
console.log(maximumProduct(nums));
// Output: -6

nums = [1, 0, 100];
console.log(maximumProduct(nums));

nums = [-100, -98, -1, 2, 3, 4];
console.log(maximumProduct(nums));

nums = [-3, -2, -1, 0, 0, 0, 0];
console.log(maximumProduct(nums));
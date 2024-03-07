// leetcode/medium/280. Wiggle Sort
// 280-wiggle-sort
// URL: https://leetcode.com/problems/wiggle-sort/description/?envType=study-plan-v2&envId=premium-algo-100

/**
 Do not return anything, modify nums in-place instead.
 */
 function wiggleSort(nums: number[]): void {
  nums.sort((a, b) => a - b);

  const left = nums.slice(0, Math.ceil(nums.length / 2));
  const right = nums.slice(Math.ceil(nums.length / 2));

  let index = 0;

  while (left.length) {
    nums[index] = left.pop();
    index += 1;

    if (right.length) {
      nums[index] = right.pop();
      index += 1;
    }
  }

  if (right.length) {
    nums[index] = right.pop();
  }
};

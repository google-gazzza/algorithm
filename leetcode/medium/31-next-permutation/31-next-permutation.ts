/*
31-next-permutation
leetcode/medium/31. Next Permutation
253. Meeting Rooms II
URL: https://leetcode.com/problems/next-permutation/

NOTE: Description
NOTE: Constraints
  - 1 <= nums.length <= 100
  - 0 <= nums[i] <= 100

NOTE: Explanation
NOTE: Reference
  - https://www.youtube.com/watch?v=quAS1iydq7U
*/

/**
 Do not return anything, modify nums in-place instead.
 */
 function nextPermutation(nums: number[]): void {
  for (let i = nums.length - 1; i > 0; i -= 1) {
    if (nums[i - 1] < nums[i]) {
      let j = nums.length - 1;

      while (nums[i - 1] >= nums[j]) {
        j -= 1;
      }

      [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
      nums.splice(i, nums.length - i, ...nums.slice(i).reverse());

      return;
    }
  }

  nums = nums.reverse();
}

let nums = [1, 2, 3];
console.log(nextPermutation(nums));
nums;
// Output: [1,3,2]

nums = [3, 2, 1];
console.log(nextPermutation(nums));
nums;
// Output: [1,2,3]

nums = [1, 1, 5];
console.log(nextPermutation(nums));
nums;
// Output: [1,5,1]

nums = [1, 3, 2];
console.log(nextPermutation(nums));
nums;
// Output: [2,1,3]

nums = [1, 5, 2, 3, 4];
console.log(nextPermutation(nums));
nums;
// [1, 5, 2, 4, 3]

nums = [1, 5, 1];
console.log(nextPermutation(nums));
nums;
// [5, 1, 1]

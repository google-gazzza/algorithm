// leetcode/medium/713. Subarray Product Less Than K
// 713-subarray-product-less-than-k
// URL: https://leetcode.com/problems/subarray-product-less-than-k/description/

function numSubarrayProductLessThanK(nums: number[], target: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const slide = [nums[i]];
    let slideSize = nums[i];

    if (slideSize < target) {
      count += 1;
    }

    for (let j = i + 1; j < nums.length; j += 1) {
      slideSize *= nums[j];

      if (slideSize < target) {
        count += 1;
      } else {
        break;
      }

      for (let k = j + 1; k < slide.length; k += 1) {
        slideSize *= slide[k];

        if (slideSize < k) {
          count += 1;
        } else {
          break;
        }
      }
    }
  }

  return count;
}

let nums = [10, 5, 2, 6];
let k = 100;
console.log(numSubarrayProductLessThanK(nums, k));
// Output: 8

nums = [1, 2, 3];
k = 0;
console.log(numSubarrayProductLessThanK(nums, k));
// Output: 0

// leetcode/easy/2859. Sum of Values at Indices With K Set Bits
// 2859-sum-of-values-at-indices-with-k-set-bits
// URL: https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/

function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const binary = i.toString(2);
    const count = binary.replaceAll('0', '').length;

    if (count === k) {
      sum += nums[i];
    }
  }

  return sum;
}

let nums = [5, 10, 1, 5, 2];
let k = 1;

console.log(sumIndicesWithKSetBits(nums, k));

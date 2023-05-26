// [Easy] 1822. Sign of the Product of an Array
// 1822_sign_of_the_product_of_an_array

// https://leetcode.com/problems/sign-of-the-product-of-an-array
// Runtime: 80 ms, faster than 93.33% of TypeScript online submissions for Sign of the Product of an Array.
// Memory Usage: 40.3 MB, less than 46.67% of TypeScript online submissions for Sign of the Product of an Array.

/**
 * @param {number[]} nums
 * @return {number}
 */
function arraySign(nums: number[]): number {
  const numsLen: number = nums.length
  let minusCount: number = 0
  for (let i: number = 0; i < numsLen; i += 1) {
    const num: number = nums[i]
    if (num === 0) {
      return 0
    } else if (num < 0) {
      minusCount += 1
    }
  }

  return minusCount % 2 === 0 ? 1 : -1
}

arraySign([-1, -2, -3, -4, 3, 2, 1]) //?
arraySign([1, 5, 0, 2, -3]) //?
arraySign([-1, 1, -1, 1, -1]) //?

// [Easy] 1822. Sign of the Product of an Array
// 1822_sign_of_the_product_of_an_array

// https://leetcode.com/problems/sign-of-the-product-of-an-array
// Runtime: 72 ms, faster than 98.16% of JavaScript online submissions for Sign of the Product of an Array.
// Memory Usage: 38.6 MB, less than 83.41% of JavaScript online submissions for Sign of the Product of an Array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
  const numsLen = nums.length
  let minusCount = 0
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num = nums[i]
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

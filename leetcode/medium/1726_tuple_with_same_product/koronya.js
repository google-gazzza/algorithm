// [Medium] 1726. Tuple with Same Product
// 1726_tuple_with_same_product

// https://leetcode.com/problems/tuple-with-same-product
// Runtime: 700 ms, faster than 18.92% of JavaScript online submissions for Tuple with Same Product.
// Memory Usage: 88.8 MB, less than 97.30% of JavaScript online submissions for Tuple with Same Product.

const getCount = (num) => ((num * (num - 1)) / 2) * 8

/**
 * @param {number[]} nums
 * @return {number}
 */
const tupleSameProduct = function (nums) {
  const multiplyMap = new Map()
  const numsLen = nums.length
  const loop = (arr, start) => {
    if (arr.length === 2) {
      const multiply = arr.reduce((acc, cur) => acc * cur, 1)
      multiplyMap.set(multiply, (multiplyMap.get(multiply) || 0) + 1)
    } else {
      for (let i = start; i < numsLen; i += 1 || 0) {
        loop([...arr, nums[i]], i + 1)
      }
    }
  }
  for (let i = 0; i < numsLen; i += 1 || 0) {
    loop([nums[i]], i + 1)
  }
  return [...multiplyMap].filter((item) => item[1] > 1).reduce((acc, cur) => acc + getCount(cur[1]), 0)
}

tupleSameProduct([2, 3, 4, 6]) //?
tupleSameProduct([1, 2, 4, 5, 10]) //?
tupleSameProduct([2, 3, 4, 6, 8, 12]) //?
tupleSameProduct([2, 3, 5, 7]) //?
tupleSameProduct([2, 3, 4, 6, 8, 12, 16, 24]) //?

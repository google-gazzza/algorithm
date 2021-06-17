// [Medium] 1726. Tuple with Same Product
// 1726_tuple_with_same_product

// https://leetcode.com/problems/tuple-with-same-product
// Runtime: 736 ms, faster than 33.33% of TypeScript online submissions for Tuple with Same Product.
// Memory Usage: 89.1 MB, less than 66.67% of TypeScript online submissions for Tuple with Same Product.


const getCount = (num: number): number => ((num * (num - 1)) / 2) * 8

function tupleSameProduct(nums: number[]): number {
  const multiplyMap = new Map<number, number>()
  const numsLen: number = nums.length
  const loop = (arr: number[], start: number) => {
    if (arr.length === 2) {
      const multiply: number = arr.reduce((acc, cur) => acc * cur, 1)
      multiplyMap.set(multiply, (multiplyMap.get(multiply) || 0) + 1)
    } else {
      for (let i: number = start; i < numsLen; i += 1) {
        loop([...arr, nums[i]], i + 1)
      }
    }
  }
  for (let i: number = 0; i < numsLen; i += 1) {
    loop([nums[i]], i + 1)
  }
  return [...multiplyMap].filter((item) => item[1] > 1).reduce((acc, cur) => acc + getCount(cur[1]), 0)
}

tupleSameProduct([2, 3, 4, 6]) //?
tupleSameProduct([1, 2, 4, 5, 10]) //?
tupleSameProduct([2, 3, 4, 6, 8, 12]) //?
tupleSameProduct([2, 3, 5, 7]) //?
tupleSameProduct([2, 3, 4, 6, 8, 12, 16, 24]) //?

// [Easy] 628. Maximum Product of Three Numbers
// 628_maximum_product_of_three_numbers

// https://leetcode.com/problems/maximum-product-of-three-numbers
// Runtime: 124 ms, faster than 84.21% of TypeScript online submissions for Maximum Product of Three Numbers.
// Memory Usage: 45.8 MB, less than 5.26% of TypeScript online submissions for Maximum Product of Three Numbers.

const descSort = (a: number, b: number): number => b - a
const ascSort = (a: number, b: number): number => a - b
const getProductOfArr = (arr: number[]) => arr.reduce((acc, cur) => acc * cur, 1)

function maximumProduct(nums: number[]): number {
  const numsLen: number = nums.length
  if (numsLen === 3) {
    return getProductOfArr(nums)
  }
  const minusArr: number[] = []
  const plusArr: number[] = []
  let isContainZero: boolean = false

  for (let i: number = 0; i < numsLen; i += 1) {
    const num: number = nums[i]
    if (num > 0) {
      plusArr.push(num)
    } else if (num < 0) {
      minusArr.push(num)
    } else {
      isContainZero = true
    }
  }
  plusArr.sort(descSort)
  minusArr.sort(ascSort)
  const minusArrLen: number = minusArr.length
  const plusArrLen: number = plusArr.length

  if (minusArrLen === 1) {
    if (plusArrLen > 2) {
      return plusArr[0] * plusArr[1] * plusArr[2]
    } else if (plusArrLen === 2) {
      if (isContainZero === true) {
        return 0
      } else {
        return plusArr[0] * plusArr[1] * minusArr[0]
      }
    } else {
      return 0
    }
  } else if (minusArrLen > 1) {
    if (plusArrLen === 0) {
      if (isContainZero === true) {
        return 0
      } else {
        return minusArr[minusArrLen - 1] * minusArr[minusArrLen - 2] * minusArr[minusArrLen - 3]
      }
    } else if (plusArrLen < 3) {
      return minusArr[0] * minusArr[1] * plusArr[0]
    } else {
      return Math.max(minusArr[0] * minusArr[1] * plusArr[0], plusArr[0] * plusArr[1] * plusArr[2])
    }
  } else {
    if (plusArrLen > 2) {
      return plusArr[0] * plusArr[1] * plusArr[2]
    } else {
      return 0
    }
  }
}

// maximumProduct([1, 2, 3]) //?
// maximumProduct([1, 2, 3, 4]) //?
// maximumProduct([-1, -2, -3]) //?
maximumProduct([-1, -2, 5, -5, 4, -4 - 3]) //?

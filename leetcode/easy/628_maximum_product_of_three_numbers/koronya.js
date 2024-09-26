// [Easy] 628. Maximum Product of Three Numbers
// 628_maximum_product_of_three_numbers

// https://leetcode.com/problems/maximum-product-of-three-numbers
// Runtime: 112 ms, faster than 71.16% of JavaScript online submissions for Maximum Product of Three Numbers.
// Memory Usage: 45.3 MB, less than 5.47% of JavaScript online submissions for Maximum Product of Three Numbers.

const descSort = (a, b) => b - a
const ascSort = (a, b) => a - b
const getProductOfArr = (arr) => arr.reduce((acc, cur) => acc * cur, 1)

const maximumProduct = function (nums) {
  const numsLen = nums.length
  if (numsLen === 3) {
    return getProductOfArr(nums)
  }
  const minusArr = []
  const plusArr = []
  let isContainZero = false

  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num = nums[i]
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
  const minusArrLen = minusArr.length
  const plusArrLen = plusArr.length

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



/**
 * @param {number[]} nums
 * @return {number}
 */

// 처음에 이렇게 했다가 Time Limit Exceeded
const maximumProduct2 = function (nums) {
  let max = Number.MIN_SAFE_INTEGER
  const numsLen = nums.length
  if (numsLen === 3) {
    return getProductOfArr(nums)
  }
  const koro = (arr, start) => {
    if (arr.length === 3) {
      max = Math.max(getProductOfArr(arr), max)
    } else {
      for (let i = start + 1; i < numsLen; i += 1 || 0) {
        koro([...arr, nums[i]], i)
      }
    }
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
    koro([nums[i]], i)
  }

  return max
}

// maximumProduct([1, 2, 3]) //?
// maximumProduct([1, 2, 3, 4]) //?
// maximumProduct([-1, -2, -3]) //?
maximumProduct([-1, -2, 5, -5, 4, -4 - 3]) //?

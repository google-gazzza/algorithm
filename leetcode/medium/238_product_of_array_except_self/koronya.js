// [Medium] 238. Product of Array Except Self
// 238_product_of_array_except_self

// https://leetcode.com/problems/product-of-array-except-self
// Runtime: 100 ms, faster than 43.48% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 42.3 MB, less than 84.86% of JavaScript online submissions for Product of Array Except Self.
const productExceptSelf = nums => {
  const resultArr = []
  nums.reduce((acc, cur, i) => {
    resultArr[i] = acc
    return acc * cur
  }, 1)
  nums.reduceRight((acc, cur, i) => {
    resultArr[i] *= acc
    return acc * cur
  }, 1)

  return resultArr
}

// Runtime: 3352 ms, faster than 6.23% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 42.5 MB, less than 73.90% of JavaScript online submissions for Product of Array Except Self.
const productExceptSelf2 = nums => {
  const numsLen = nums.length
  const getValue = index => {
    let multiply = 1
    for (let i = 0; i < numsLen; i = i + 1 | 0) {
      const num = nums[i]
      if (i === index) {
        continue
      }
      if (num === 0) {
        return 0
      } else {
        multiply *= num
      }
    }
  
    return multiply
  }

  return nums.map((_, index) => getValue(index))
}

// Runtime: 2976 ms, faster than 6.80% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 43.1 MB, less than 41.31% of JavaScript online submissions for Product of Array Except Self.
const getValue3 = (nums, index) => {
  const numsLen = nums.length
  let multiply = 1
  for (let i = 0; i < numsLen; i = i + 1 | 0) {
    const num = nums[i]
    if (i === index) {
      continue
    }
    if (num === 0) {
      return 0
    } else {
      multiply *= num
    }
  }

  return multiply
}

const productExceptSelf3 = nums => {
  return nums.map((_, index) => getValue3(nums, index))
}

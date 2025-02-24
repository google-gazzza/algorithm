// [Medium] 2149. Rearrange Array Elements by Sign
// 2149_rearrange_array_elements_by_sign

// https://leetcode.com/problems/rearrange-array-elements-by-sign
// Runtime: 352 ms, faster than 87.57% of JavaScript online submissions for Rearrange Array Elements by Sign.
// Memory Usage: 89.4 MB, less than 94.67% of JavaScript online submissions for Rearrange Array Elements by Sign.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function (nums) {
  const plusArr = []
  const minusArr = []
  nums.forEach((num) => {
    const targetArr = num > 0 ? plusArr : minusArr
    targetArr.push(num)
  })

  const resultArr = []
  const limit = nums.length / 2
  for (let i = 0; i < limit; i += 1 || 0) {
    resultArr.push(plusArr[i])
    resultArr.push(minusArr[i])
  }

  return resultArr
}

rearrangeArray([3, 1, -2, -5, 2, -4])
// rearrangeArray([-1, 1])

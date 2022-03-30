// [Medium] 2149. Rearrange Array Elements by Sign
// 2149_rearrange_array_elements_by_sign

// https://leetcode.com/problems/rearrange-array-elements-by-sign
// Runtime: 534 ms, faster than 62.07% of TypeScript online submissions for Rearrange Array Elements by Sign.
// Memory Usage: 102 MB, less than 25.86% of TypeScript online submissions for Rearrange Array Elements by Sign.

function rearrangeArray(nums: number[]): number[] {
  const plusArr: number[] = []
  const minusArr: number[] = []
  nums.forEach((num) => {
    const targetArr = num > 0 ? plusArr : minusArr
    targetArr.push(num)
  })

  const resultArr: number[] = []
  const limit = nums.length / 2
  for (let i: number = 0; i < limit; i += 1) {
    resultArr.push(plusArr[i])
    resultArr.push(minusArr[i])
  }

  return resultArr
}

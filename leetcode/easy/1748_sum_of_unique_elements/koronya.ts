// [Easy] 1748. Sum of Unique Elements
// 1748_sum_of_unique_elements

// https://leetcode.com/problems/sum-of-unique-elements
// Runtime: 72 ms, faster than 93.33% of TypeScript online submissions for Sum of Unique Elements.
// Memory Usage: 40.5 MB, less than 40.00% of TypeScript online submissions for Sum of Unique Elements.


/**
 * @param {number[]} nums
 * @return {number}
 */
function sumOfUnique(nums: number[]): number {
  const numMap = new Map<number, number>()
  const numsLen: number = nums.length
  for (let i: number = 0; i < numsLen; i += 1) {
    const num: number = nums[i]
    numMap.set(num, (numMap.get(num) || 0) + 1)
  }
  return [...numMap].filter((item) => item[1] === 1).reduce((acc, cur) => acc + cur[0], 0)
}

sumOfUnique([1, 2, 3, 2, 2]) //?
sumOfUnique([1, 1, 1, 1]) //?

// [Easy] 2206. Divide Array Into Equal Pairs
// 2206_divide_array_into_equal_pairs

// https://leetcode.com/problems/divide-array-into-equal-pairs
// Runtime: 72 ms, faster than 87.89% of JavaScript online submissions for Divide Array Into Equal Pairs.
// Memory Usage: 45.8 MB, less than 15.23% of JavaScript online submissions for Divide Array Into Equal Pairs.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = function (nums) {
  const numMap = new Map()
  nums.forEach((num) => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })

  return [...numMap].every((item) => item[1] % 2 === 0)
}

divideArray([3, 2, 3, 2, 2, 2])
divideArray([1, 2, 3, 4])

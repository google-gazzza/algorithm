// [Easy] 414. Third Maximum Number
// 414_third_maximum_number

// https://leetcode.com/problems/third-maximum-number
// Runtime: 72 ms, faster than 98.35% of JavaScript online submissions for Third Maximum Number.
// Memory Usage: 40.3 MB, less than 58.21% of JavaScript online submissions for Third Maximum Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  const numSet = new Set()
  nums.forEach((num) => numSet.add(num))
  const sortedArr = [...numSet].sort((a, b) => b - a)
  if (numSet.size < 3) {
    return sortedArr[0]
  }

  return numSet.size < 3 ? sortedArr[0] : sortedArr[2]
}

thirdMax([3, 2, 1]) //?
thirdMax([2, 1]) //?
thirdMax([2, 2, 3, 1]) //?

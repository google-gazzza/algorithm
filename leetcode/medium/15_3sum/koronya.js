// [Medium] 15. 3Sum
// 15_3sum

// https://leetcode.com/problems/3sum
// Runtime: 532 ms, faster than 25.35% of JavaScript online submissions for 3Sum.
// Memory Usage: 52.5 MB, less than 20.75% of JavaScript online submissions for 3Sum.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const numsLen = nums.length
  const resultSet = new Set()
  const resultArr = []
  nums.sort((a, b) => a - b)
  for (let right = numsLen - 1; right > 1; right -= 1 || 0) {
    let left = 0
    let mid = right - 1
    while (left < mid) {
      const numA = nums[left]
      const numB = nums[mid]
      const numC = nums[right]
      let sum = numA + numB + numC
      if (sum === 0) {
        const str = `${numA}-${numB}-${numC}`
        if (resultSet.has(str) === false) {
          resultSet.add(str)
          resultArr.push([numA, numB, numC])
        }
      }
      if (sum >= 0) {
        mid -= 1
      } else {
        left += 1
      }
    }
  }
  return resultArr
}

threeSum([-1, 0, 1, 2, -1, -4]) //?
threeSum([]) //?
threeSum([0]) //?

threeSum([0, 0, 0, 0]) //?

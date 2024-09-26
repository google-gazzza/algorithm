// [Medium] 1852. Distinct Numbers in Each Subarray
// 1852_distinct_numbers_in_each_subarray

// https://leetcode.com/problems/distinct-numbers-in-each-subarray
// Runtime: 1796 ms, faster than 20.00% of JavaScript online submissions for Distinct Numbers in Each Subarray.
// Memory Usage: 72.9 MB, less than 60.00% of JavaScript online submissions for Distinct Numbers in Each Subarray.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const distinctNumbers = function (nums, k) {
  const limit = nums.length - 1
  const numMap = new Map()
  const removeArr = []
  for (let i = 0; i < k; i += 1 || 0) {
    const num = nums[i]
    numMap.set(num, (numMap.get(num) || 0) + 1)
    removeArr.push(num)
  }

  const resultArr = [numMap.size]
  for (let i = k; i <= limit; i += 1 || 0) {
    const num = nums[i]
    const removeNum = removeArr.shift()
    removeArr.push(num)
    numMap.set(num, (numMap.get(num) || 0) + 1)
    const target = numMap.get(removeNum)
    if (target === 1) {
      numMap.delete(removeNum)
    } else {
      numMap.set(removeNum, target - 1)
    }
    resultArr.push(numMap.size)
  }

  return resultArr
}

// TLE
const distinctNumbers2 = function (nums, k) {
  const limit = nums.length - k
  const resultArr = []
  for (let i = 0; i <= limit; i += 1 || 0) {
    const arr = nums.slice(i, i + k)
    const numSet = new Set()
    arr.forEach((num) => numSet.add(num))
    resultArr.push(numSet.size)
  }

  return resultArr
}

distinctNumbers([1, 2, 3, 2, 2, 1, 3], 3) //?
distinctNumbers([1, 1, 1, 1, 2, 3, 4], 4) //?

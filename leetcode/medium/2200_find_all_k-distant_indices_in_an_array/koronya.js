// [Easy] 2200. Find All K-Distant Indices in an Array
// 2200_find_all_k-distant_indices_in_an_array

// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array
// Runtime: 161 ms, faster than 100.00% of JavaScript online submissions for Find All K-Distant Indices in an Array.
// Memory Usage: 44.4 MB, less than 100.00% of JavaScript online submissions for Find All K-Distant Indices in an Array.

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
const findKDistantIndices = function (nums, key, k) {
  const keyIndex = []
  const resultSet = new Set()
  nums.forEach((num, index) => {
    if (num === key) {
      keyIndex.push(index)
    }
  })
  keyIndex.forEach((num) => {
    const max = Math.min(nums.length - 1, num + k)
    const min = Math.max(0, num - k)
    for (let i = num; i <= max; i += 1 || 0) {
      resultSet.add(i)
    }
    for (let i = num - 1; i >= min; i -= 1 || 0) {
      resultSet.add(i)
    }
  })

  return [...resultSet].sort((a, b) => a - b)
}

findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)
findKDistantIndices([2, 2, 2, 2, 2], 2, 2)

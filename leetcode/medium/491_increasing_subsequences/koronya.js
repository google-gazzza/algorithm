// [Medium] 491. Increasing Subsequences
// 491_increasing_subsequences

// https://leetcode.com/problems/increasing-subsequences
// Runtime: 224 ms, faster than 47.92% of JavaScript online submissions for Increasing Subsequences.
// Memory Usage: 59 MB, less than 45.83% of JavaScript online submissions for Increasing Subsequences.

const concatArr = (arr) => arr.reduce((acc, cur) => (acc === '' ? String(cur) : `${acc},${cur}`), '')
const validArr = (arr) => {
  const arrLen = arr.length
  let prev = arr[0]
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const num = arr[i]
    if (prev > num) {
      return false
    }
    prev = num
  }
  return true
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function (nums) {
  const numsLen = nums.length
  const resultSet = new Set()
  const dfs = (arr, start) => {
    if (validArr(arr) === false) {
      return
    }
    if (arr.length > 1) {
      const key = concatArr(arr)
      if (resultSet.has(key) === false) {
        resultSet.add(key)
      }
    }
    for (let i = start; i < numsLen; i += 1 || 0) {
      dfs([...arr, nums[i]], i + 1)
    }
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
    dfs([nums[i]], i + 1)
  }

  return [...resultSet].map((item) =>
    item.split(',').reduce((acc, cur) => {
      acc.push(Number(cur))
      return acc
    }, []),
  )
}

findSubsequences([4, 6, 7, 7]) //?
findSubsequences([4, 4, 3, 2, 1]) //?

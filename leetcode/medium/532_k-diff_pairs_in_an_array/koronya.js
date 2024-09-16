// [Medium] 532. K-diff Pairs in an Array
// 532_k-diff_pairs_in_an_array

// https://leetcode.com/problems/k-diff-pairs-in-an-array
// Runtime: 88 ms, faster than 78.21% of JavaScript online submissions for K-diff Pairs in an Array.
// Memory Usage: 42.5 MB, less than 68.16% of JavaScript online submissions for K-diff Pairs in an Array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = (nums, k) => {
  nums.sort((a, b) => a - b)
  let resultCount = 0
  const numMap = new Map()
  if (k === 0) {
    nums.forEach((num) => {
      numMap.set(num, (numMap.get(num) || 0) + 1)
    })
    for (const mappedValue of numMap) {
      if (mappedValue[1] > 1) {
        resultCount += 1
      }
    }
    return resultCount
  }

  const numSet = new Set()
  nums.forEach((num) => {
    if (!numSet.has(num)) {
      numSet.add(num)
    }
  })

  for (const num of numSet) {
    if (numSet.has(num + k) === true) {
      resultCount += 1
    }
  }
  return resultCount
}

findPairs([3, 1, 4, 1, 5], 2) //?
findPairs([1, 2, 3, 4, 5], 1) //?
findPairs([1, 3, 1, 5, 4], 0) //?
findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3) //?
findPairs([-1, -2, -3], 1) //?

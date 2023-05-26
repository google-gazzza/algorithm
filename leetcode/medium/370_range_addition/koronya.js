// [Medium] 370. Range Addition
// 370_range_addition

// https://leetcode.com/problems/range-addition
// Runtime: 1056 ms, faster than 26.20% of JavaScript online submissions for Range Addition.
// Memory Usage: 51.6 MB, less than 11.07% of JavaScript online submissions for Range Addition.

/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
const getModifiedArray = function (length, updates) {
  const arr = new Array(length).fill(0)
  updates.forEach(([start, end, number]) => {
    for (let i = start; i <= end; i += 1 || 0) {
      arr[i] += number
    }
  })
  return arr
}

getModifiedArray(5, [
  [1, 3, 2],
  [2, 4, 3],
  [0, 2, -2],
])

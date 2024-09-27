// [Easy] 830. Positions of Large Groups
// 830_positions_of_large_groups

// https://leetcode.com/problems/positions-of-large-groups
// Runtime: 96 ms, faster than 63.03% of JavaScript online submissions for Positions of Large Groups.
// Memory Usage: 41.9 MB, less than 71.52% of JavaScript online submissions for Positions of Large Groups.

/**
 * @param {string} s
 * @return {number[][]}
 */

const LARGE_AMOUNT = 3

const largeGroupPositions = function (s) {
  const resultArr = []
  const sLen = s.length
  let beforeStr = s[0]
  let beforeCount = 1
  let beforeStart = 0
  for (let i = 1; i < sLen; i += 1 || 0) {
    if (beforeStr !== s[i]) {
      if (beforeCount >= LARGE_AMOUNT) {
        resultArr.push([beforeStart, i - 1])
      }
      beforeStr = s[i]
      beforeCount = 1
      beforeStart = i
    } else {
      beforeCount += 1
    }
  }
  if (beforeCount >= LARGE_AMOUNT) {
    resultArr.push([beforeStart, sLen - 1])
  }

  return resultArr
}

// largeGroupPositions('abc') //?
// largeGroupPositions('aaa') //?
// largeGroupPositions('abbxxxxzzy') //?
// largeGroupPositions('abcdddeeeeaabbbcd') //?

// [Easy] 830. Positions of Large Groups
// 830_positions_of_large_groups

// https://leetcode.com/problems/positions-of-large-groups
// Runtime: 92 ms, faster than 80.00% of TypeScript online submissions for Positions of Large Groups.
// Memory Usage: 42.5 MB, less than 60.00% of TypeScript online submissions for Positions of Large Groups.

/**
 * @param {string} s
 * @return {number[][]}
 */

const LARGE_AMOUNT: number = 3

type Tuple = [number, number]

function largeGroupPositions(s: string): number[][] {
  const resultArr: Tuple[] = []
  const sLen: number = s.length
  let beforeStr: string = s[0]
  let beforeCount: number = 1
  let beforeStart: number = 0
  for (let i: number = 1; i < sLen; i += 1) {
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

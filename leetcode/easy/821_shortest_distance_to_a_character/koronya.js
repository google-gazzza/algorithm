// https://leetcode.com/problems/shortest-distance-to-a-character
// Runtime: 68 ms, faster than 66.09% of JavaScript online submissions for Shortest Distance to a Character.
// Memory Usage: 37.2 MB, less than 33.33% of JavaScript online submissions for Shortest Distance to a Character.

const getClosestIndex = (arr, index) => {
  let min = Number.MAX_SAFE_INTEGER
  arr.map(item => {
    min = Math.min(Math.abs(item - index), min)
  })
  return min
}

const shortestToChar = (S, C) => {
  const resultArr = []
  const CArr = []
  const SArr = S.split('')
  SArr.map((item, index) => {
    if (item === C) {
      CArr.push(index)
    }
  })
  SArr.map((_, index) => {
    if (CArr.includes(index)) {
      resultArr.push(0)
    } else {
      resultArr.push(getClosestIndex(CArr, index))
    }
  })
  return resultArr
}

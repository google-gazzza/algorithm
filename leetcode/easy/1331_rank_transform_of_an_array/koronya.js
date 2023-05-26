// [Easy] 1331. Rank Transform of an Array
// 1331_rank_transform_of_an_array

// https://leetcode.com/problems/rank-transform-of-an-array
// Runtime: 244 ms, faster than 83.43% of JavaScript online submissions for Rank Transform of an Array.
// Memory Usage: 58.2 MB, less than 73.14% of JavaScript online submissions for Rank Transform of an Array.
const arrayRankTransform = arr => {
  const numMap = new Map()
  const sortedArr = [...arr].sort((a, b) => a - b)
  let rank = 0
  sortedArr.map(num => {
    if (!numMap.has(num)) {
      rank += 1
      numMap.set(num, rank)
    }
  })

  return arr.map(num => numMap.get(num))
}

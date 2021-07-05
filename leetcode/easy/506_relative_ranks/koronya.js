// [Easy] 506. Relative Ranks
// 506_relative_ranks

// https://leetcode.com/problems/relative-ranks
// Runtime: 84 ms, faster than 94.12% of JavaScript online submissions for Relative Ranks.
// Memory Usage: 41.7 MB, less than 54.62% of JavaScript online submissions for Relative Ranks.

const getPriorityString = (priority) => {
  switch (priority) {
    case 0:
      return 'Gold Medal'
    case 1:
      return 'Silver Medal'
    case 2:
      return 'Bronze Medal'
    default:
      return String(priority + 1)
  }
}

/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
  const resultArr = Array.from({ length: score.length })
  const sortedScoreArr = score.map((item, index) => [item, index]).sort((a, b) => b[0] - a[0])
  sortedScoreArr.forEach((item, priority) => {
    resultArr[item[1]] = getPriorityString(priority)
  })
  return resultArr
}

findRelativeRanks([5, 4, 3, 2, 1])
findRelativeRanks([10, 3, 8, 9, 4])

// [Easy] 506. Relative Ranks
// 506_relative_ranks

// https://leetcode.com/problems/relative-ranks
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Relative Ranks.
// Memory Usage: 42.5 MB, less than 61.54% of TypeScript online submissions for Relative Ranks.

const getPriorityString = (priority: number): string => {
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

function findRelativeRanks(score: number[]): string[] {
  const resultArr: string[] = Array.from({ length: score.length })
  const sortedScoreArr: number[][] = score.map((item, index) => [item, index]).sort((a, b) => b[0] - a[0])
  sortedScoreArr.forEach((item, priority) => {
    resultArr[item[1]] = getPriorityString(priority)
  })
  return resultArr
}

findRelativeRanks([5, 4, 3, 2, 1])
findRelativeRanks([10, 3, 8, 9, 4])

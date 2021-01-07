// [Medium] 1395. Count Number of Teams
// 1395_count_number_of_teams

// https://leetcode.com/problems/count-number-of-teams
// Runtime: 212 ms, faster than 17.20% of JavaScript online submissions for Count Number of Teams.
// Memory Usage: 44.1 MB, less than 18.43% of JavaScript online submissions for Count Number of Teams.
const numTeams = function (rating) {
  const ratingLen = rating.length
  let result = 0
  const dfs = (start, arr) => {
    if (arr.length === 3) {
      result += 1
      return
    }
    for (let i = start + 1; i < ratingLen; i += 1 || 0) {
      const beforeMax = arr[arr.length - 1]
      const next = rating[i]
      if (next > beforeMax) {
        dfs(i, [...arr, rating[i]])
      }
    }
  }

  for (let i = 0; i < ratingLen; i += 1 || 0) {
    dfs(i, [rating[i]])
  }
  const reverseRating = rating.reverse()
  for (let i = 0; i < ratingLen; i += 1 || 0) {
    dfs(i, [reverseRating[i]])
  }

  return result
}

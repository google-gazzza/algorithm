// [Medium] 1395. Count Number of Teams
// 1395_count_number_of_teams

// https://leetcode.com/problems/count-number-of-teams
// Runtime: 228 ms, faster than 20.00% of TypeScript online submissions for Count Number of Teams.
// Memory Usage: 44.7 MB, less than 30.00% of TypeScript online submissions for Count Number of Teams.

function numTeams(rating: number[]): number {
  const ratingLen: number = rating.length
  let result: number = 0
  const dfs = (start: number, arr: number[]) => {
    if (arr.length === 3) {
      result += 1
      return
    }
    for (let i: number = start + 1; i < ratingLen; i += 1) {
      const beforeMax: number = arr[arr.length - 1]
      const next: number = rating[i]
      if (next > beforeMax) {
        dfs(i, [...arr, rating[i]])
      }
    }
  }

  for (let i: number = 0; i < ratingLen; i += 1) {
    dfs(i, [rating[i]])
  }
  const reverseRating: number[] = rating.reverse()
  for (let i: number = 0; i < ratingLen; i += 1) {
    dfs(i, [reverseRating[i]])
  }

  return result
}

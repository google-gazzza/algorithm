// [JS][6kyu] Levenshtein Distance
// levenshtein-distance
// https://www.codewars.com/kata/545cdb4f61778e52810003a2/train/javascript

const levenshtein = (a, b) => {
  const row = a.length
  const col = b.length
  const dp = Array.from({ length: row + 1 }, () => Array.from({ length: col + 1 }, () => 0))
  for (let i = 1; i <= row; i += 1) {
    dp[i][0] = i
  }
  for (let i = 1; i <= col; i += 1) {
    dp[0][i] = i
  }
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      const substitutionCost = a[i] === b[j] ? 0 : 1
      dp[i + 1][j + 1] = Math.min(dp[i][j] + substitutionCost, dp[i][j + 1] + 1, dp[i + 1][j] + 1)
    }
  }

  return dp[row][col]
}

levenshtein('kitten', 'sitting')

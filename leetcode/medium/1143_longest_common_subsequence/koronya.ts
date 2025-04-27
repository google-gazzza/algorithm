// [Medium] 1143. Longest Common Subsequence
// 1143_longest_common_subsequence

// https://leetcode.com/problems/longest-common-subsequence/description/
// Runtime: 49 ms, faster than 75.07%
// Memory Usage: 82.83 MB, less than 60.70%

function longestCommonSubsequence(text1: string, text2: string): number {
  const text1Length = text1.length
  const text2Length = text2.length
  const dp = Array.from({ length: text1Length + 1 }, () => Array(text2Length + 1).fill(0))
  for (let i = 1; i <= text1Length; i += 1) {
    for (let j = 1; j <= text2Length; j += 1) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[text1Length][text2Length]
}

longestCommonSubsequence('abcde', 'ace')
longestCommonSubsequence('abc', 'abc')
longestCommonSubsequence('abc', 'def')

// [Easy] 1688. Count of Matches in Tournament
// 1688_count_of_matches_in_tournament

// https://leetcode.com/problems/count-of-matches-in-tournament
// Runtime: 104 ms, faster than 100.00% of TypeScript online submissions for Count of Matches in Tournament.
// Memory Usage: 40.4 MB, less than 100.00% of TypeScript online submissions for Count of Matches in Tournament.
function numberOfMatches (n: number): number {
  const loop = (n: number): number => {
    if (n === 2) {
      return 1
    }
    if (n < 2) {
      return 0
    }
    if (n % 2 === 0) {
      return n / 2 + loop(n / 2)
    } else {
      return (n - 1) / 2 + loop((n + 1) / 2)
    }
  }

  return loop(n)
}

// [Easy] 1688. Count of Matches in Tournament
// 1688_count_of_matches_in_tournament

// https://leetcode.com/problems/count-of-matches-in-tournament
// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Count of Matches in Tournament.
// Memory Usage: 38.6 MB, less than 100.00% of JavaScript online submissions for Count of Matches in Tournament.
const numberOfMatches = function (n) {
  const loop = (n) => {
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

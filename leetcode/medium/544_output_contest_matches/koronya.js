// [Medium] 544. Output Contest Matches
// 544_output_contest_matches

// https://leetcode.com/problems/output-contest-matches
// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Output Contest Matches.
// Memory Usage: 44.3 MB, less than 100.00% of JavaScript online submissions for Output Contest Matches.

/**
 * @param {number} n
 * @return {string}
 */
const findContestMatch = function (n) {
  const loop = (n, arr) => {
    if (n < 2) {
      return arr
    }
    return loop(
      n / 2,
      Array.from({ length: n }).map((_) => `(${arr.shift()},${arr.pop()})`),
    )
  }

  return `(${loop(
    n / 2,
    Array.from({ length: n }).map((_, i) => i + 1),
  ).join(',')})`
}

// findContestMatch(4)
// findContestMatch(8)
// findContestMatch(16)

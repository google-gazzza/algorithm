// [Medium] 544. Output Contest Matches
// 544_output_contest_matches

// https://leetcode.com/problems/output-contest-matches
// Runtime: 86 ms, faster than 100.00% of TypeScript online submissions for Output Contest Matches.
// Memory Usage: 45.5 MB, less than 100.00% of TypeScript online submissions for Output Contest Matches.

function findContestMatch(n: number): string {
  const loop = (n: number, arr: number[] | string[]): number[] | string[] => {
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

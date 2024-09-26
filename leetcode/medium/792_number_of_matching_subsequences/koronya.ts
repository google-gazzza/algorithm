// [Medium] 792. Number of Matching Subsequences
// 792_number_of_matching_subsequences

// https://leetcode.com/problems/number-of-matching-subsequences
// Runtime: 174 ms, faster than 86.96% of TypeScript online submissions for Number of Matching Subsequences.
// Memory Usage: 56.8 MB, less than 52.17% of TypeScript online submissions for Number of Matching Subsequences.

function numMatchingSubseq(s: string, words: string[]): number {
  const check = (candidate: string): boolean => {
    const candidateLen = candidate.length
    let accStr = s
    for (let i: number = 0; i < candidateLen; i += 1) {
      const findIndex = accStr.indexOf(candidate[i])
      if (findIndex === -1) {
        return false
      }
      accStr = accStr.slice(findIndex + 1)
    }
    return true
  }
  return words.reduce((acc, cur) => (check(cur) === true ? acc + 1 : acc), 0)
}

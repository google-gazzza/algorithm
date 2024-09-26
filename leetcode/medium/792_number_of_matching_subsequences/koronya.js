// [Medium] 792. Number of Matching Subsequences
// 792_number_of_matching_subsequences

// https://leetcode.com/problems/number-of-matching-subsequences
// Runtime: 124 ms, faster than 96.42% of JavaScript online submissions for Number of Matching Subsequences.
// Memory Usage: 51.3 MB, less than 66.57% of JavaScript online submissions for Number of Matching Subsequences.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function (s, words) {
  const check = (candidate) => {
    const candidateLen = candidate.length
    let accStr = s
    for (let i = 0; i < candidateLen; i += 1 || 0) {
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

numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace'])
numMatchingSubseq('dsahjpjauf', ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'])

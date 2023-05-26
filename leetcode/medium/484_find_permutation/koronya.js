// [Medium] 484. Find Permutation
// 484_find_permutation

// https://leetcode.com/problems/find-permutation
// Runtime: 89 ms, faster than 94.04% of JavaScript online submissions for Find Permutation.
// Memory Usage: 46.6 MB, less than 75.50% of JavaScript online submissions for Find Permutation.

/**
 * @param {string} s
 * @return {number[]}
 */
const findPermutation = function (s) {
  const resultArr = []
  const sLen = s.length
  let prevCandidate = 1
  let dCount = 0
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (str === 'I') {
      let max = i + 1
      for (let j = 0; j < dCount; j += 1 || 0) {
        resultArr.push(max - j)
      }
      resultArr.push(prevCandidate)
      prevCandidate = max + 1
      dCount = 0
    } else {
      dCount += 1
    }
  }
  let limit = dCount + 1
  let max = prevCandidate + dCount
  for (let i = 0; i < limit; i += 1 || 0) {
    resultArr.push(max - i)
  }

  return resultArr
}

findPermutation('I')
findPermutation('DDI')
findPermutation('DI')
findPermutation('DDIDDDID')
findPermutation('IDIDID')
findPermutation('IIDD')
findPermutation('IDID')
findPermutation('DIDI')
findPermutation('DDII')

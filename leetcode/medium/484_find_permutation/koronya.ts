// [Medium] 484. Find Permutation
// 484_find_permutation

// https://leetcode.com/problems/find-permutation
// Runtime: 98 ms, faster than 87.50% of TypeScript online submissions for Find Permutation.
// Memory Usage: 48.1 MB, less than 62.50% of TypeScript online submissions for Find Permutation.

function findPermutation(s: string): number[] {
  const resultArr = []
  const sLen = s.length
  let prevCandidate = 1
  let dCount = 0
  for (let i: number = 0; i < sLen; i += 1) {
    const str = s[i]
    if (str === 'I') {
      let max = i + 1
      for (let j: number = 0; j < dCount; j += 1) {
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
  for (let i: number = 0; i < limit; i += 1) {
    resultArr.push(max - i)
  }

  return resultArr
}

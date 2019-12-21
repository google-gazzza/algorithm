// https://leetcode.com/problems/letter-case-permutation
// Runtime: 68 ms, faster than 86.29% of JavaScript online submissions for Letter Case Permutation.
// Memory Usage: 37.5 MB, less than 66.67% of JavaScript online submissions for Letter Case Permutation.

const numberReg = /\d/

const letterCasePermutation = S => {
  const resultArr = []
  const SLen = S.length
  const dfs = (curStr, pos) => {
    const target = S[pos]
    if (curStr.length === SLen) {
      resultArr.push(curStr)
    }
    if (pos >= SLen) {
      return
    }

    if (target.match(numberReg)) {
      dfs(curStr + target, pos + 1)
    } else {
      dfs(curStr + target.toLowerCase(), pos + 1)
      dfs(curStr + target.toUpperCase(), pos + 1)
    }
  }
  dfs("", 0)
  return resultArr
}

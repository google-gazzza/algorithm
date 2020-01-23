// https://leetcode.com/problems/generate-parentheses
// Runtime: 52 ms, faster than 89.74% of JavaScript online submissions for Generate Parentheses.
// Memory Usage: 34.9 MB, less than 84.62% of JavaScript online submissions for Generate Parentheses.
const generateParenthesis = n => {
  const resultArr = []
  const maxLen = 2 * n
  const dfs = (str, openCount, closeCount, num) => {
    if (num === maxLen) {
      resultArr.push(str)
      return
    }
    if (openCount === closeCount) {
      dfs(str + '(', openCount + 1, closeCount, num + 1)
    } else if (openCount < n && closeCount < n) {
      dfs(str + '(', openCount + 1, closeCount, num + 1)
      dfs(str + ')', openCount, closeCount + 1, num + 1)
    } else {
      dfs(str + ')', openCount, closeCount + 1, num + 1)
    }
  }
  dfs('(', 1, 0, 1)
  return resultArr
}

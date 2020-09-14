// [Medium] 856. Score of Parentheses
// 856_score_of_parentheses

// https://leetcode.com/problems/score-of-parentheses
// Runtime: 76 ms, faster than 70.18% of JavaScript online submissions for Score of Parentheses.
// Memory Usage: 36.5 MB, less than 80.70% of JavaScript online submissions for Score of Parentheses.
const scoreOfParentheses = S => {
  const parentStack = [0]
  const SLen = S.length

  for (let i = 0; i < SLen; i = i + 1 | 0) {
    const str = S[i]
    if (str === '(') {
      parentStack.push(0)
    } else {
      const beforeCount = parentStack.pop()
      const topOfStack = parentStack.pop()
      if (beforeCount === 0) {
        parentStack.push(topOfStack + 1)
      } else {
        parentStack.push(topOfStack + beforeCount * 2)
      }
    }
  }

  return parentStack[0]
}

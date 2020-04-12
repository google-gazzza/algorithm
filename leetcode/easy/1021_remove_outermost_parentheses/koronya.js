// https://leetcode.com/problems/remove-outermost-parentheses
// Runtime: 40 ms, faster than 100.00% of JavaScript online submissions for Remove Outermost Parentheses.
// Memory Usage: 36 MB, less than 66.67% of JavaScript online submissions for Remove Outermost Parentheses.
const removeOuterParentheses = S => {
  let openCount = 0
  let resultText = ''
  const SLen = S.length
  for (let i = 0; i < SLen; i = i + 1 | 0) {
    const str = S[i]
    if (str === '(') {
      if (openCount >= 1) {
        resultText += str
      }
      openCount += 1
    } else {
      openCount -= 1
      if (openCount !== 0) {
        resultText += str
      }
    }
  }

  return resultText//?
}

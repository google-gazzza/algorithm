// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid
// Runtime: 60 ms, faster than 49.84% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
// Memory Usage: 35.7 MB, less than 25.00% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
const minAddToMakeValid = S => {
  const SLen = S.length
  const arr = []
  for (let i = 0; i < SLen; i = i + 1 | 0) {
    if (arr[arr.length - 1] === '(' && S[i] === ')') {
      arr.pop()
    } else {
      arr.push(S[i])
    }
  }

  return arr.length
}

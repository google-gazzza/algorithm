// https://leetcode.com/problems/valid-parentheses/submissions/
// Runtime: 56 ms, faster than 63.17% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 33.8 MB, less than 90.00% of JavaScript online submissions for Valid Parentheses.
const isValid = s => {
  const stack = []
  const openArr = ['(', '{', '[']
  const closeArr = [')', '}', ']']
  const sArr = s.split('')
  const sArrLen = sArr.length

  for (let i = 0; i < sArrLen; i += 1) {
    const item = sArr[i]
    if (openArr.includes(item)) {
      stack.push(matchCloseStr(item))
    } else if (closeArr.includes(item)) {
      if (stack.pop() !== item) {
        return false
      }
    }
  }
  return stack.length === 0
}

const matchCloseStr = str => {
  return str === '('
    ? ')'
    : str === '{'
      ? '}'
      : str === '['
        ? ']'
        : ''
}

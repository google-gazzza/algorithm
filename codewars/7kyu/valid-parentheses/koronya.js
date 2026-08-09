// [JS][7kyu] Valid Parentheses
// valid-parentheses
// https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/javascript

const validParentheses = (parenStr) => {
  let count = 0
  const parenStrLen = parenStr.length
  for (let i = 0; i < parenStrLen; i += 1 || 0) {
    if (parenStr[i] === '(') {
      count += 1
    } else {
      count -= 1
    }
    if (count < 0) {
      return false
    }
  }
  return count === 0
}

validParentheses('()')
validParentheses('((()))')
validParentheses('()()()')
validParentheses('(()())()')
validParentheses('()(())((()))(())()')

validParentheses(')(')
validParentheses('()()(')
validParentheses('((())')
validParentheses('())(()')
validParentheses(')()')
validParentheses(')')

validParentheses('')

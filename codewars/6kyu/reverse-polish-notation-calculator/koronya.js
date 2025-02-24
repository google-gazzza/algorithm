// [JS][6kyu] Reverse polish notation calculator
// reverse-polish-notation-calculator
// https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/javascript

const calc = (expr) => {
  const exprArr = expr.split(' ')
  const exprArrLen = exprArr.length
  if (exprArrLen === 0) {
    return 0
  }
  if (exprArrLen === 1) {
    return Number(expr)
  }

  const stack = []
  for (let i = 0; i < exprArrLen; i += 1 || 0) {
    const token = exprArr[i]
    if (token === '+') {
      const second = stack.pop()
      const first = stack.pop()
      stack.push(first + second)
    } else if (token === '-') {
      const second = stack.pop()
      const first = stack.pop()
      stack.push(first - second)
    } else if (token === '*') {
      const second = stack.pop()
      const first = stack.pop()
      stack.push(first * second)
    } else if (token === '/') {
      const second = stack.pop()
      const first = stack.pop()
      stack.push(first / second)
    } else {
      stack.push(Number(token))
    }
  }

  return stack.pop()
}

calc('')
calc('3')
calc('3.5')
calc('1 3 +')
calc('1 3 *')
calc('1 3 -')
calc('4 2 /')
calc('5 1 2 + 4 * + 3 -')

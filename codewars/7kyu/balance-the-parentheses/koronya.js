// [JS][7kyu] Balance the parentheses
// balance-the-parentheses
// https://www.codewars.com/kata/5d8365b570a6f6001519ecc8/train/javascript

const fixParentheses = (s) => {
  let balance = 0
  let opensNeeded = 0
  for (const ch of s) {
    if (ch === '(') {
      balance += 1
    } else {
      if (balance === 0) {
        opensNeeded += 1
      } else {
        balance -= 1
      }
    }
  }
  const prefix = '('.repeat(opensNeeded)
  const suffix = ')'.repeat(balance)

  return prefix + s + suffix
}

fixParentheses(')(') === '()()'
fixParentheses('))))(()(') === '(((())))(()())'

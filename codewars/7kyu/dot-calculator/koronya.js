// [JS][7kyu] Dot Calculator
// dot-calculator
// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

const getRepeatedDot = (num) => '.'.repeat(num)

const dotCalculator = (equation) => {
  const [left, operator, right] = equation.split(' ')
  const leftCount = left.length
  const rightCount = right.length
  switch (operator) {
    case '+':
      return getRepeatedDot(leftCount + rightCount)
    case '-':
      return getRepeatedDot(leftCount - rightCount)
    case '*':
      return getRepeatedDot(leftCount * rightCount)
    case '//':
      return getRepeatedDot(leftCount / rightCount)
    default:
      return ''
  }
}

dotCalculator('..... + ...............') === '....................'
dotCalculator('..... - ...') === '..'
dotCalculator('..... - .') === '....'
dotCalculator('..... * ...') === '...............'
dotCalculator('..... * ..') === '..........'
dotCalculator('..... // ..') === '..'
dotCalculator('..... // .') === '.....'
dotCalculator('. // ..') === ''
dotCalculator('. - .') === ''

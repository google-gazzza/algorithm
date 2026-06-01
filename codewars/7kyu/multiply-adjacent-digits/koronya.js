// [JS][7kyu] Multiply Adjacent Digits
// multiply-adjacent-digits
// https://www.codewars.com/kata/67191920c29c7e09d9f40707/train/javascript

const digitMultiplication = (expr) => {
  const numbers = expr.match(/\d+/g).map((char) => char.split('').reduce((acc, curr) => acc * Number(curr), 1))
  const operators = expr.match(/[+-]/g)

  return numbers.reduce((acc, curr, index) => {
    if (index === 0) {
      return curr
    }
    const operator = operators[index - 1]
    return operator === '+' ? acc + curr : acc - curr
  }, 0)
}

digitMultiplication('53+5')
digitMultiplication('266-66')
digitMultiplication('555')

// [JS][7kyu] Basic Calculator
// basic-calculator
// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript

const calculate = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '/':
      return num2 === 0 ? null : num1 / num2
    case '*':
      return num1 * num2
    default:
      return null
  }
}

calculate(3.2, '+', 8) === 11.2
calculate(3.2, '-', 8) === -4.8
calculate(3.2, '/', 8) === 0.4
calculate(3.2, '*', 8) === 25.6
calculate(-3, '+', 0) === -3
calculate(-3, '-', 0) === -3
calculate(-3, '/', 0) === null
calculate(-3, '*', 0) === 0
calculate(-3, 'w', 0) === null

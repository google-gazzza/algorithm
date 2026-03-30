// [JS][7kyu] Debug Basic Calculator
// debug-basic-calculator
// https://www.codewars.com/kata/56368f37d464c0a43c00007f/train/javascript

const calculate = (a, o, b) => {
  if (o === '+') {
    return a + b
  } else if (o === '-') {
    return a - b
  }
  if (o === '/' && b !== 0) {
    return a / b
  }
  if (o === '*') {
    return a * b
  }
  return null
}

calculate(2, '+', 4) === 6
calculate(6, '-', 1.5) === 4.5
calculate(-4, '*', 8) === -32
calculate(49, '/', -7) === -7
calculate(8, 'm', 2) === null
calculate(4, '/', 0) === null
calculate(3.2, '+', 8) === 11.2
calculate(3.2, '-', 8) === -4.8
calculate(3.2, '/', 8) === 0.4
calculate(3.2, '*', 8) === 25.6
calculate(-3, '+', 0) === -3
calculate(-3, '-', 0) === -3
calculate(-3, '/', 0) === null
calculate(-2, '/', -2) === 1
calculate(-2, 'codewars', -2) === null
calculate(-3, '*', 0) === 0
calculate(0, '*', 0) === 0
calculate(0, '**', 0) === null
calculate(-3, 'w', 0) === null
calculate(0, '/', 0) === null

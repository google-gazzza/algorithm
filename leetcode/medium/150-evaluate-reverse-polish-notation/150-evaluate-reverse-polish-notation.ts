/*
150-evaluate-reverse-polish-notation
leetcode/medium/150. Evaluate Reverse Polish Notation
URL: https://leetcode.com/problems/evaluate-reverse-polish-notation/

NOTE: Description
NOTE: Constraints
  - 1 <= tokens.length <= 104
  - tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

NOTE: Explanation
*/

function calculate(b: number, a: number, operator: string): number {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.trunc((a / b));
    default:
      return 0;
  }
}

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  while (tokens.length) {
    if (tokens[0] === '+' || tokens[0] === '-' || tokens[0] === '*' || tokens[0] === '/') {
      stack.push(calculate(stack.pop(), stack.pop(), tokens.shift()));
    } else {
      stack.push(Number(tokens.shift()));
    }
  }

  return stack.pop();
}

let tokens = ['2', '1', '+', '3', '*'];
console.log(evalRPN(tokens));
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

tokens = ['4', '13', '5', '/', '+'];
console.log(evalRPN(tokens));
// // Output: 6
// // Explanation: (4 + (13 / 5)) = 6
//
tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
console.log(evalRPN(tokens));
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
//   = ((10 * (6 / (12 * -11))) + 17) + 5
//   = ((10 * (6 / -132)) + 17) + 5
//   = ((10 * 0) + 17) + 5
//   = (0 + 17) + 5
//   = 17 + 5
//   = 22
// make-a-function-that-does-arithmetic
// Make a function that does arithmetic!
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/

const arithmetic = (a, b, operator) => {
  const functions = {
    'add': (a, b) => a + b,
    'subtract': (a, b) => a - b,
    'multiply': (a, b) => a * b,
    'divide': (a, b) => a / b,
  };
  
  return functions[operator](a, b);
};



console.log(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
console.log(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
console.log(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
console.log(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");

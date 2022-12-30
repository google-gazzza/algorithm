// [JS][7kyu] Make a function that does arithmetic!
// make-a-function-that-does-arithmetic
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

const arithmetic = (a, b, operator) => {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
};

arithmetic(1, 2, "add");
arithmetic(8, 2, "subtract");
arithmetic(5, 2, "multiply");
arithmetic(8, 2, "divide");

// [JS][8kyu] Basic Mathematical Operations
// basic-mathematical-operations
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

const basicOp = (operation, value1, value2) => {
  switch (operation) {
    default:
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
};

basicOp("+", 4, 7);
basicOp("-", 15, 18);
basicOp("*", 5, 5);
basicOp("/", 49, 7);

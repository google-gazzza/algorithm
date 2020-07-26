// basic-mathematical-operations
// Basic Mathematical Operations
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/basic-mathematical-operations

const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
};



console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);

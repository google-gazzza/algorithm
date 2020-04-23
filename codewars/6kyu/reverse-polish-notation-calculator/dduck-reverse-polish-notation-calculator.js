// reverse-polish-notation-calculator
// https://www.codewars.com/kata/52f78966747862fc9a0009ae/

const calc = (expr) => {
  const expressions = expr.split(' ');
  let result = 0;
  
  if (expressions.length === 1) {
    result = Number(expressions);
  }
  
  while (expressions.length > 1) {
    for (let i = 0; i < expressions.length - 2; i += 1) {
      if (!isNaN(Number(expressions[i]))
        && !isNaN(Number(expressions[i + 1]))
        && isNaN(Number(expressions[i + 2]))
      ) {
        switch (expressions[i + 2]) {
          case '+':
            result = Number(expressions[i]) + Number(expressions[i + 1]);
            break;
          case '-':
            result = Number(expressions[i]) - Number(expressions[i + 1]);
            break;
          case '*':
            result = Number(expressions[i]) * Number(expressions[i + 1]);
            break;
          case '/':
            result = Number(expressions[i]) / Number(expressions[i + 1]);
            break;
        }
        expressions.splice(i, 2);
        expressions.splice(i, 1, result);
      }
    }
  }
  
  return result;
};

console.log(calc(""), 0, "Should work with empty string");
console.log(calc("3"), 3, "Should parse numbers");
console.log(calc("3.5"), 3.5, "Should parse float numbers");
console.log(calc("1 3 +"), 4, "Should support addition");
console.log(calc("1 3 *"), 3, "Should support multiplication");
console.log(calc("1 3 -"), -2, "Should support subtraction");
console.log(calc("4 2 /"), 2, "Should support division");
console.log(calc('5 1 2 + 4 * + 3 -'), 14);

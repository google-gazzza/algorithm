// almost-even
// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b
const splitInteger = (num, parts) => {
  const quotient = Math.floor(num / parts);
  let remainder = num % (quotient * parts);
  let result = new Array(parts).fill(quotient);
  
  while (remainder) {
    result[0] = result[0] + 1;
    remainder -= 1;
    result.push(result.shift());
  }
  
  return result;
};

console.log(splitInteger(10, 1).sort(), [10]);
console.log(splitInteger(2, 2).sort(), [1, 1]);
console.log(splitInteger(20, 5).sort(), [4, 4, 4, 4, 4]);
console.log(splitInteger(76, 14).sort(), [3, 3, 3, 3, 4, 4]);

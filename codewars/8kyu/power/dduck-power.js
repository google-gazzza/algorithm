// power
// Power
// difficulty: 8kyu
// https://www.codewars.com/kata/562926c855ca9fdc4800005b

const numberToPower = (number, power, sum = 1) => power ? numberToPower(number, power - 1, sum * number) : sum;


console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);

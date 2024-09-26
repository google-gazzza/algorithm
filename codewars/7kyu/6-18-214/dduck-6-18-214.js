// 6-18-214
// 6+18=214
// difficulty: 7kyu
// https://www.codewars.com/kata/5effa412233ac3002a9e471d/

const parseToDigitsReverseArray = (num) => [...String(num)].map(Number).reverse();

const add = (num1, num2) => {
  const a = parseToDigitsReverseArray(num1);
  const b = parseToDigitsReverseArray(num2);
  const result = [...a.map((e) => e + (b.shift() || 0)), ...b].reverse();
  
  result.forEach((e, i, arr) => {
    if (e > 9) {
      arr.splice(i, 1, ...[...String(e)].map(Number));
    }
  });
  
  return Number(result.join(''));
};


console.log(add(2, 11), 13);
console.log(add(0, 1), 1);
console.log(add(0, 0), 0);
console.log(add(16, 18), 214);
console.log(add(26, 39), 515);
console.log(add(122, 81), 1103);
console.log(add(1222, 30277), 31499);
console.log(add(1236, 30977), 31111013);
console.log(add(38810, 1383), 391193);
console.log(add(49999, 49999), 818181818);

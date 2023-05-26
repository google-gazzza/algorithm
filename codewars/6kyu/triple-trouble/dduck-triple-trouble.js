// triple-trouble
// https://www.codewars.com/kata/55d5434f269c0c3f1b000058

const countConsecutiveNum = (num, size) => {
  let targetNum = [];
  const str = String(num).split('');
  
  for (let i = 0; i < str.length - size + 1; i += 1) {
    if (new Set(str.slice(i, i + size)).size === 1) {
      targetNum.push(str[i]);
    }
  }
  
  return targetNum;
};

const tripledouble = (num1, num2) => {
  const num1Result = countConsecutiveNum(num1, 3);
  const num2Result = countConsecutiveNum(num2, 2);
  
  return num1Result.filter((v) => num2Result.includes(v)).length > 0 ? 1 : 0;
};

console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0);

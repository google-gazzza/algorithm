// https://www.codewars.com/kata/5a4e3782880385ba68000018

const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const balancedNum = (number) => {
  const splitedNum = String(number).split('').map(Number);
  const halfLength = Math.floor(splitedNum.length / 2);
  if (sum(splitedNum.slice(0, halfLength)) === sum(splitedNum.slice(halfLength + 1))) {
    return 'Balanced';
  }
  return 'Not Balanced';
};

console.log(balancedNum(7), 'Balanced');
console.log(balancedNum(959), 'Balanced');
console.log(balancedNum(13), 'Balanced');
console.log(balancedNum(432), 'Not Balanced');
console.log(balancedNum(424), 'Balanced');
console.log(balancedNum(1024), 'Not Balanced');
console.log(balancedNum(66545), 'Not Balanced');
console.log(balancedNum(295591), 'Not Balanced');
console.log(balancedNum(1230987), 'Not Balanced');
console.log(balancedNum(56239814), 'Balanced');

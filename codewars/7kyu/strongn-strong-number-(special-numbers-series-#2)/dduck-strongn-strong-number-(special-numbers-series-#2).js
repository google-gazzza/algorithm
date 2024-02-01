// https://www.codewars.com/kata/5a4d303f880385399b000001

const factorial = (n) => n > 1 ? n * factorial(n - 1) : n;

const strong = (n) => {
  const result = String(n)
    .split('')
    .map((v) => factorial(Number(v)) || 1)
    .reduce((a, c) => a + c, 0);
  
  if (result === n) {
    return 'STRONG!!!!';
  }
  return 'Not Strong !!';
};

console.log(strong(1), 'STRONG!!!!');
console.log(strong(2), 'STRONG!!!!');
console.log(strong(145), 'STRONG!!!!');
console.log(strong(7), 'Not Strong !!');
console.log(strong(93), 'Not Strong !!');
console.log(strong(185), 'Not Strong !!');

// Playing with digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050

const digPow = (n, p) => {
  const sum = String(n).split('')
    .reduce((a, c, i) => a + Number(c) ** (p + i), 0);
  const quotient = sum / n;
  
  return Number.isInteger(quotient) ? quotient : -1;
};

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);

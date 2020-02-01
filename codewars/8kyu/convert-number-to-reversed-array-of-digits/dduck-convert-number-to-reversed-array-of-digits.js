// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

const digitize = (n) => `${n}`.split('').reverse().map((v) => parseInt(v, 10));

console.log(digitize(35231), [1, 3, 2, 5, 3]);

['5', '2'].map(parseInt);
//?

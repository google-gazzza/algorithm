// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce

const check = (a, x) => a.includes(x);

console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

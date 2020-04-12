// https://www.codewars.com/kata/55c45be3b2079eccff00010f

const order = (words) => words.split(' ')
  .sort((a, b) => (a.match(/[0-9]/)[0] - b.match(/[0-9]/)[0]))
  .join(' ');

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""), "");

// https://www.codewars.com/kata/5545f109004975ea66000086

const isDivisible = (n, x, y) => (n % x === 0 && n % y === 0);


isDivisible(3, 3, 4);
//?
//,false);
isDivisible(12, 3, 4);
//?
//,true);
isDivisible(8, 3, 4);
//?
//,false);
isDivisible(48, 3, 4);
//?
//,true);

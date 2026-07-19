// [JS][7kyu] Arithmetic Sequence!
// arithmetic-sequence
// https://www.codewars.com/kata/540f8a19a7d43d24ac001018/train/javascript

const nthterm = (first, n, c) => first + n * c

nthterm(1, 2, 3) === 7
nthterm(2, 2, 2) === 6
nthterm(-50, 10, 20) === 150

// return-the-first-m-multiples-of-n
// Return the first M multiples of N
// difficuty: 7kyu
// https://www.codewars.com/kata/593c9175933500f33400003e

const multiples = (m, n) => new Array(m).fill(0).map((e, i) => (i + 1) * n);


console.log(multiples(3, 5), [5, 10, 15]);

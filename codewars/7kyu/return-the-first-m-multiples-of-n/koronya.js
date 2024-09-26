// [JS][7kyu] Return the first M multiples of N
// return-the-first-m-multiples-of-n
// https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript

const multiples = (m, n) => Array.from({ length: m }, (_, i) => (i + 1) * n)

multiples(3, 5)

// [JS][7kyu] Maximum Multiple
// maximum-multiple
// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

const maxMultiple = (divisor, bound) => divisor * Math.floor(bound / divisor)

maxMultiple(2, 7)
maxMultiple(3, 10)
maxMultiple(7, 17)
maxMultiple(10, 50)
maxMultiple(37, 200)
maxMultiple(7, 100)

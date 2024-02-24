// [JS][7kyu] Nth Root of a Number
// nth-root-of-a-number
// https://www.codewars.com/kata/5520714decb43308ea000083/train/javascript

const root = (x, n) => Math.pow(x, 1 / n)

root(4, 2) === 2
root(8, 3) === 2
root(256, 4) === 4
root(9, 2) === 3
root(6.25, 2) === 2.5

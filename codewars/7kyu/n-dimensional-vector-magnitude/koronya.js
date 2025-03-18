// [JS][7kyu] N-Dimensional Vector Magnitude
// n-dimensional-vector-magnitude
// https://www.codewars.com/kata/5806c2f897dba05dd900004c/train/javascript

const magnitude = (vector) => Math.sqrt(vector.reduce((acc, cur) => acc + cur ** 2, 0))

magnitude([2 / 3, 1 / 3, 2 / 3]) === 1
magnitude([-2, -4, 4]) === 6

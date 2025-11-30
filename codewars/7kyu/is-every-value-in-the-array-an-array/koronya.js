// [JS][7kyu] Is every value in the array an array?
// is-every-value-in-the-array-an-array
// https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript

const arrCheck = (value) => value.every(Array.isArray)

arrCheck([]) === true
arrCheck([['string']]) === true
arrCheck([[], {}]) === false
arrCheck([[1], [2], [3]]) === true
arrCheck(['A', 'R', 'R', 'A', 'Y']) === false

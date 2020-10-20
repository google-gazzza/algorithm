// sum-of-array-singles
// Sum of array singles
// difficulty: 7kyu
// https://www.codewars.com/kata/59f11118a5e129e591000134

const repeats = (arr) => arr.reduce((acc, cur, i, _arr) => {
  if (_arr.indexOf(cur) === _arr.lastIndexOf(cur)) {
    acc += cur;
  }
  return acc;
}, 0);


console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);

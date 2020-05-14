// Matrix Addition
// https://www.codewars.com/kata/526233aefd4764272800036f

const matrixAddition = (a, b, result = []) => {
  if (a.length === 0) {
    return result;
  }
  result.push(a.shift().map((v, i) => v + b[0][i]));
  b.shift();
  
  return matrixAddition(a, b, result);
};

console.log(matrixAddition(
  [[1, 2],
    [1, 2]],
//    +
  [[2, 3],
    [2, 3]]),
//    =
  [[3, 5],
    [3, 5]]);

console.log(matrixAddition(
  [ [1] ],
//   +
  [ [2] ] ),
//   =
  [ [3] ] );

console.log(matrixAddition(
  [[1, 2, 3],
    [3, 2, 1],
    [1, 1, 1]],
//      +
  [[2, 2, 1],
    [3, 2, 3],
    [1, 1, 3]]),
//      =
  [[3, 4, 4],
    [6, 4, 4],
    [2, 2, 4]]);

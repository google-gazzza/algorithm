// fold-an-array
// https://www.codewars.com/kata/57ea70aa5500adfe8a000110

const foldArray = (array, runs) => {
  if (runs) {
    let result = [];
    let copy = [...array];
    while (copy.length) {
      result.push((copy.shift() || 0) + (copy.pop() || 0));
    }
    return foldArray(result, runs - 1);
  }
  return array;
};

let input = [1, 2, 3, 4, 5];
let expected = [6, 6, 3];
console.log(foldArray(input, 1), expected);

expected = [9, 6];
console.log(foldArray(input, 2), expected);

expected = [15];
console.log(foldArray(input, 3), expected);

input = [-9, 9, -8, 8, 66, 23];
expected = [14, 75, 0];
console.log(foldArray(input, 1), expected);

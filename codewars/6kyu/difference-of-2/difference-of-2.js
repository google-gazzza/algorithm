// difference-of-2
// https://www.codewars.com/kata/5340298112fa30e786000688/

const twosDifference = (input) => input.sort((a, b) => a - b)
  .map((v) => {
    if (input.includes(v + 2)) {
      return [v, v + 2];
    }
    return null;
  }).filter((v) => v);

console.log(twosDifference([1, 2, 3, 4]), [[1, 3], [2, 4]]);
console.log(twosDifference([1, 3, 4, 6]), [[1, 3], [4, 6]]);

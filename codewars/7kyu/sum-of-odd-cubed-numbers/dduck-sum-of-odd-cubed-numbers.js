// https://www.codewars.com/kata/580dda86c40fa6c45f00028a

const cubeOdd = (arr) => (arr.filter((v) => isNaN(v)).length ? undefined
  : arr.reduce((acc, cur) => ((cur % 2) ? acc + cur ** 3 : acc), 0));

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(['a', 12, 9, 'z', 42]), undefined);
console.log(cubeOdd(['a', 5, 16, 27, -3]), undefined);

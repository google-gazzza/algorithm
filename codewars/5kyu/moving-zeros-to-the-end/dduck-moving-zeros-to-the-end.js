// moving-zeros-to-the-end
// Moving Zeros To The End
// difficulty: 5kyu
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/

const moveZeros = (arr) => arr.filter((e) => e !== 0).concat(arr.filter((e) => e === 0));


console.log(JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])));
//?
console.log(JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
//?

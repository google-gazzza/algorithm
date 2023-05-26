// [JS][7kyu] Even numbers in an array
// even-numbers-in-an-array
// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

const evenNumbers = (array, number) =>
  array
    .filter((num) => num % 2 === 0)
    .reverse()
    .slice(0, number)
    .reverse()

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)

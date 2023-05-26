// [JS][7kyu] Ones and Zeros
// ones-and-zeros
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);

binaryArrayToNumber([0, 0, 0, 1]) === 1;
binaryArrayToNumber([0, 0, 1, 0]) === 2;
binaryArrayToNumber([1, 1, 1, 1]) === 15;
binaryArrayToNumber([0, 1, 1, 0]) === 6;

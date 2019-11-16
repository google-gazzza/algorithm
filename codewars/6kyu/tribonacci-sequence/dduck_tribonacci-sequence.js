// https://www.codewars.com/kata/tribonacci-sequence/

const tribonacci = (arr, n, index = 3) => {
  if (n < index) {
    return arr.slice(0, n);
  }
  arr.push(arr.slice(arr.length - 3).reduce((acc, cur) => acc + cur, 0));
  return tribonacci(arr, n, index + 1);
};

console.log(tribonacci([4, 6, 7], 2));
// ,[1,1,1,3,5,9,17,31,57,105])

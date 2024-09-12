// https://www.codewars.com/kata/576b93db1129fcf2200001e6

const sumArray = (array) => {
  if (!array || array.length <= 2) {
    return 0;
  }
  array.sort((a, b) => a - b);
  return (
    array.reduce((acc, cur) => acc + cur, 0) -
    array[0] -
    array[array.length - 1]
  );
};

sumArray(null) === 0;
sumArray([]) === 0;
sumArray([3]) === 0;
sumArray([3, 5]) === 0;
sumArray([6, 2, 1, 8, 10]) === 16;
sumArray([0, 1, 6, 10, 10]) === 17;
sumArray([-6, -20, -1, -10, -12]) === -28;
sumArray([-6, 20, -1, 10, -12]) === 3;

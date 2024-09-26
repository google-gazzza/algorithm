// multiplication-table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/

const multiplicationTable = (size) => {
  return new Array(size).fill(0).map((v, i) => {
    return new Array(size).fill(0).map((v2, i2) => {
      return (i + 1) * (i2 + 1);
    });
  });
};

console.log(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);

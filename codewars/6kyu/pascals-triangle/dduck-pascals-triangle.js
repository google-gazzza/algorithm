// pascals-triangle
// https://www.codewars.com/kata/5226eb40316b56c8d500030f/

const pascalsTriangle = (n, arr = [[1]]) => {
  if (n > 1) {
    let result = [];
    arr[arr.length - 1].reduce((acc, cur) => {
      result.push(acc + cur);
      return cur;
    });
    arr.push([1, ...result, 1]);
    return pascalsTriangle(n - 1, arr);
  }
  return [].concat(...arr);
};

console.log(pascalsTriangle(1), [1], "1 level triangle incorrect");
console.log(pascalsTriangle(2), [1, 1, 1], "2 level triangle incorrect");
console.log(pascalsTriangle(4), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1], "4 level triangle incorrect");
console.log(pascalsTriangle(6), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1], "6 level triangle incorrect");

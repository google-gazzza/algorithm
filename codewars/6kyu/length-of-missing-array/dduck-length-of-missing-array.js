// length-of-missing-array
// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

const getLengthOfMissingArray = (arrayOfArrays) => {
  let result = 0;
  
  (arrayOfArrays || [])
    .map((v) => v ? v.length : v)
    .sort((a, b) => a - b)
    .some((v, i, arr) => {
      if (!v) {
        result = 0;
        return true;
      }
      if (i < arr.length - 1 && v + 1 !== arr[i + 1]) {
        result = v + 1;
        return v + 1;
      }
    });
  
  return result;
};

console.log(getLengthOfMissingArray([[2, 3],
  [1, 0, 2],
  [4, 2, 4, 1, 3],
  [0, 1, 4, 0, 2, 1],
  [2, 2, 1, 2, 1, 2, 4],
  [0, 4, 1, 3, 2, 0, 0, 1],
  [1, 1, 1, 1, 3, 2, 4, 0, 4],
  [1, 4, 2, 0, 2, 1, 0, 2, 0, 2]]));
// 4
console.log(getLengthOfMissingArray([[2, 4],
  [],
  [1, 0, 2],
  [2, 4, 3, 2, 3, 3],
  [3, 3, 4, 0],
  [0, 0, 2, 4, 1]]));
// 0
console.log(getLengthOfMissingArray(
  [[],
    [0],
    [2, 3],
    [1, 3, 4],
    [3, 4, 3, 3],
    [2, 2, 4, 3, 3],
    [3, 1, 1, 1, 2, 1, 0]],
));
// 0

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 3);
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 2);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]), 5);
console.log(getLengthOfMissingArray([]), 0);

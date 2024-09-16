// merge-two-arrays

// difficulty - 7kyu
// Merge two arrays
// https://www.codewars.com/kata/583af10620dda4da270000c5
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/merge-two-arrays

const mergeArrays = (a, b) => [
  ...a.map((v) => {
    return b.length ? [v, b.shift()] : [v];
  }),
  b
].reduce((acc, cur) => acc.concat(cur), []);


// Since ECMA 10th edition(2019) support Array.prototype.flat()
// codewars does not spport ECMA-2019
//
// const mergeArrays = (a, b) => [
//   ...a.map((v) => {
//     return b.length ? [v, b.shift()] : [v];
//   }),
//   b
// ].flat(1);

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']),
  [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);

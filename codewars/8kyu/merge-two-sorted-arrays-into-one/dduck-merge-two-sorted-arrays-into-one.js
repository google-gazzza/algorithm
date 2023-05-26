// merge-two-sorted-arrays-into-one
// Merge two sorted arrays into one
// difficulty: 8kyu
// https://www.codewars.com/kata/5899642f6e1b25935d000161

const mergeArrays = (arr1, arr2) => new Array(...new Set([...arr1, ...arr2])).sort((a, b) => a - b);



console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8], "Basic tests");
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Basic tests");
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]), [1, 2, 3, 4, 5, 7, 9, 10, 11, 12], "Basic tests");

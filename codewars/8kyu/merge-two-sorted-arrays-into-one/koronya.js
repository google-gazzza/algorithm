// [JS][8kyu] Merge two sorted arrays into one
// merge-two-sorted-arrays-into-one
// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2].sort((a, b) => a - b))]

// mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])

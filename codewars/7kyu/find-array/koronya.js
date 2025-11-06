// [JS][7kyu] Find array
// find-array
// https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055/train/javascript

const findArray = (arr1, arr2) => arr2.map((index) => arr1[index] ?? null).filter((item) => item !== null)

findArray(['a', 'a', 'a', 'a', 'a'], [2, 4])
findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7])
findArray([1, 2, 3, 4, 5], [0])
findArray([1, 2, 3, 4, 5], [4, 2, 0])
findArray([1, 2, 3, 4, 5], [2, 2, 2])
findArray(['this', 'is', 'test'], [0, 1, 2])
findArray([], [0, 1, 2])

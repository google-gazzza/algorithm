// [JS][6kyu] Array combinations
// array-combinations
// https://www.codewars.com/kata/59e66e48fc3c499ec5000103/train/javascript

const getUniqueArr = (arr) => [...new Set(arr)]

const solve = (arr) => arr.map((item) => getUniqueArr(item)).reduce((acc, cur) => acc * cur.length, 1)

// prettier-ignore
solve([[1,2],[4],[5,6]]) === 4
// prettier-ignore
solve([[1,2],[4,4],[5,6,6]]) === 4
// prettier-ignore
solve([[1,2],[3,4],[5,6]]) === 8
// prettier-ignore
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]) === 72

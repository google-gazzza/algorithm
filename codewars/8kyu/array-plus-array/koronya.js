// [JS][8kyu] Array plus arrayArray plus array
// array-plus-array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc + cur, 0)

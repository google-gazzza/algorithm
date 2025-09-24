// [JS][7kyu] Filter Coffee
// filter-coffee
// https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript

const search = (budget, prices) =>
  prices
    .filter((price) => price <= budget)
    .sort((a, b) => a - b)
    .join(',')

search(3, [6, 1, 2, 9, 2]) === '1,2,2'
search(14, [7, 3, 23, 9, 14, 20, 7]) === '3,7,7,9,14'
search(0, [6, 1, 2, 9, 2]) === ''

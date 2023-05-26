// [JS][8kyu] Removing Elements
// removing-elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

const removeEveryOther = (arr) => arr.filter((item, index) => index % 2 === 0)

removeEveryOther([1, 2, 3, 4, 5])

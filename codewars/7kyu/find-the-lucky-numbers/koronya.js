// [JS][7kyu] Find the lucky numbers
// find-the-lucky-numbers
// https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript

const filterLucky = (x) => x.filter((num) => num.toString().includes('7'))

filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])
filterLucky([71, 9907, 69])

// [JS][7kyu] Testing 1-2-3
// testing-1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

const number = (array) => array.map((item, index) => `${index + 1}: ${item}`)

number(['a', 'b', 'c'])

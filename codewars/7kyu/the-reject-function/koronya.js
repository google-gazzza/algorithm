// [JS][7kyu] The reject() function
// the-reject-function
// https://www.codewars.com/kata/52988f3f7edba9839c00037d/train/javascript

const reject = (array, predicate) => array.filter((item) => !predicate(item))

reject(['a', 'b', 3, 'd'], (x) => typeof x === 'number')
reject(['a', 'b', 3, 'd'], (x) => typeof x === 'string')
reject([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0)

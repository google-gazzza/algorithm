// removing-elements
// Removing Elements
// difficulty: 8kyu
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/removing-elements

const removeEveryOther = (arr) => arr.filter((v, i) => i % 2 === 0);


console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]), [['Goodbye']]);

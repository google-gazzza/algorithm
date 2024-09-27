// exclamation-marks-series-3
// Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
// difficulty: 7kyu
// https://www.codewars.com/kata/57faefc42b531482d5000123
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/exclamation-marks-series-3-remove-all-exclamation-marks-from-sentence-except-at-the-end

const remove = (s) => s.replace(/!/g, '') + (s.match(/!+$/) ? s.match(/!+$/)[0] : '');


console.log(remove("Hi!"), "Hi!");
console.log(remove("Hi!!!"), "Hi!!!");
console.log(remove("!Hi"), "Hi");
console.log(remove("!Hi!"), "Hi!");
console.log(remove("Hi! Hi!"), "Hi Hi!");
console.log(remove("Hi"), "Hi");

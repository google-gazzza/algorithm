// es6-string-addition
// difficulty - 8kyu
// ES6 string addition
// https://www.codewars.com/kata/582e4c3406e37fcc770001ad/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/es6-string-addition

const joinStrings = (string1, string2) => `${string1} ${string2}`;

console.log(joinStrings('string1', 'string2'), 'string1 string2');
console.log(joinStrings('testing', 'testing'), 'testing testing');
console.log(joinStrings(134, 234), '134 234');

// parse-nice-int-from-char-problem
// Parse nice int from char problem
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/parse-nice-int-from-char-problem

const getAge = (inputString) => parseInt(inputString.match(/[0-9]/)[0], 10);



console.log(getAge("4 years old"), 4);

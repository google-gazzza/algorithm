// simple-pig-latin
// Simple Pig Latin
// difficulty: 5kyu
// https://www.codewars.com/kata/520b9d2ad5c005041100000f
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/5kyu/simple-pig-latin

const pigIt = (str) => str.split(' ')
  .map((v) => {
    if (v.length === 1 && !v.match(/[a-z]/i)) {
      return v;
    }
    
    return `${v.slice(1)}${v[0]}ay`;
  })
  .join(' ');



console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay');

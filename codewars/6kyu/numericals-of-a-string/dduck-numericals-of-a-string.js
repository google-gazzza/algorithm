// numericals-of-a-string
// Numericals of a String
// difficulty: 6kyu
// https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/numericals-of-a-string

const numericals = (s) => [...s].reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  acc.result += acc[cur];
  return acc;
}, { result: '' }).result;



console.log(numericals("Hello, World!"), "1112111121311");
console.log(numericals("Hello, World! It's me, JomoPipi!"), "11121111213112111131224132411122");
console.log(numericals("hello hello"), "11121122342");
console.log(numericals("Hello"), "11121");
console.log(numericals("aaaaaaaaaaaa"),"123456789101112");

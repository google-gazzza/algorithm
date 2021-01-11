/*
coding-meetup-11-higher-order-functions-series-find-the-average-age

# codewars/7ky/Coding Meetup #11 - Higher-Order Functions Series - Find the average age

Difficulty: 7kyu
URL: https://www.codewars.com/kata/582ba36cc1901399a70005fc/

## Approach

### en
1.sum input’s ages and divide by input’s length
2.rounding process-1 and return

### kr
1.input값의 age를 더한후 input값이 길이로 나눕니다.
2.round처리해서 리턴합니다.

## Solution
### JavaScript

*/

function getAverageAge(list) {
  return Math.round(list.reduce((acc, cur) => acc + cur.age, 0) / list.length);
}

// test
const list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

console.log(getAverageAge(list1), 50);

const list2 = [
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
];

console.log(getAverageAge(list2), 21);

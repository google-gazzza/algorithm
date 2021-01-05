/*
coding-meetup-5-higher-order-functions-series-prepare-the-count-of-languages

# codewars/7kyu/Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5828713ed04efde70e000346/
Tags: reduce

## Approach

### en
Omit description.

### kr
설명을 생략합니다.

## Solution
### JavaScript

*/

const countLanguages = (list) => list.reduce((acc, cur) => {
  acc[cur.language] = (acc[cur.language] || 0) + 1;
  return acc;
}, {});

// test
const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

const answer = { C: 2, JavaScript: 1, Ruby: 1 };

console.log(countLanguages(list1), answer);

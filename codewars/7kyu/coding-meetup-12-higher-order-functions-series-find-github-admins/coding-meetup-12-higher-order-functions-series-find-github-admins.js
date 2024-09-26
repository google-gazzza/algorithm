/*
coding-meetup-12-higher-order-functions-series-find-github-admins

# codewars/7ky/Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

Difficulty: 7kyu
URL: https://www.codewars.com/kata/582dace555a1f4d859000058/

## Approach

### en
Omit description.

### kr
설명을 생략합니다.

## Solution
### JavaScript

*/

function findAdmin(list, lang) {
  return list.filter((e) => (e.language === lang) && (e.githubAdmin === 'yes'));
}

// test
const list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

const answer1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
];

console.log(findAdmin(list1, 'JavaScript'), answer1);
console.log(findAdmin(list1, 'Ruby'), []);
console.log(findAdmin(list1, 'Python'), []);

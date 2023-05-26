/*
coding-meetup-3-higher-order-functions-series-is-ruby-coming

# codewars/7kyu/Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

Difficulty: 7kyu
URL: https://www.codewars.com/kata/5827acd5f524dd029d0005a4/

## Approach

### en
Omit explaination

### kr
설명을 생략합니다.

## Solution
### JavaScript

*/
const isRubyComing = (list) => list.some((e) => e.language === 'Ruby');

// test
var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

var list2 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' }
];

console.log(isRubyComing(list1), true);
console.log(isRubyComing(list2), false);

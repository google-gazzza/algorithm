/*
coding-meetup-6-higher-order-functions-series-can-they-code-in-the-same-language

# codewars/7kyu/Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
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
const isSameLanguage = (list) => !list.some((e) => e.language !== list[0].language);

// test
const list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

const list2 = [
  { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
  { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
  { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
];

console.log(isSameLanguage(list1), true);
console.log(isSameLanguage(list2), false);

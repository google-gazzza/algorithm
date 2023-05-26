/*
coding-meetup-9-higher-order-functions-series-is-the-meetup-age-diverse

# codewars/6kyu/Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5829ca646d02cd1a65000284/

## Approach

### en
1.when target 100, check if there is some who order than or equal 100
2.check if there is someone who has age between ‘target’ and ‘target +9’
2-1 if exist, recursion with target + 10
3.if not exist return false;

### kr
1.target이 100 이상인경우 100이상인 사람이 있는지 확인합니다.
2.target ~ target +9사이의 나이가 있는지 확인합니다.
2-1만약 있을경우 target+10으로 리커젼합니다.
3.없을경우 false를 리턴합니다.

## Solution
### JavaScript

*/

function isAgeDiverse(list, target = 10) {
  if (target >= 100) {
    return list.some((e) => target <= e.age);
  }
  
  if (list.some((e) => target <= e.age && e.age < target + 10)) {
    return isAgeDiverse(list, target + 10);
  }
  
  return false;
}

// test
const list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

const list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
  {
    firstName: 'Amar',
    lastName: 'V.',
    country: 'Bosnia and Herzegovina',
    continent: 'Europe',
    age: 32,
    language: 'Ruby'
  },
];

const list3 = [
  { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
  { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
];

console.log(isAgeDiverse(list1), true);
console.log(isAgeDiverse(list2), false);
console.log(isAgeDiverse(list3), false);

/*
coding-meetup-10-higher-order-functions-series-create-usernames

# codewars/6ky/Coding Meetup #10 - Higher-Order Functions Series - Create usernames

Difficulty: 6kyu
URL: https://www.codewars.com/kata/582a53ed261c2af9d200018c/

## Approach

### en
1.iterate input
1-1 while iterate input new value in e.username and return element

### kr
1.input값을 이터레이트 합니다.
1-1 이터레이트 하는동안 e.username프로퍼티에 새로운 값을 추가한뒤 엘레멘트를 리턴합니다.

## Solution
### JavaScript

*/

function addUsername(list) {
  return list.map((e) => {
    e.username = `${e.firstName}${e.lastName[0]}${new Date().getFullYear() - e.age}`.toLowerCase();
    return e;
  });
}

// test
const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

const targetResult = [
  {
    firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
    username: 'emilyn1990'
  },
  {
    firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
    username: 'nore2000'
  }
];

console.log(JSON.stringify(addUsername(list1)) === JSON.stringify(targetResult));

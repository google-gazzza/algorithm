/*
coding-meetup-2-higher-order-functions-series-greet-developers

# codewars/7kyu/Coding Meetup #2 - Higher-Order Functions Series - Greet developers
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58279e13c983ca4a2a00002a/solutions/javascript

## Approach

### en
Omit explaination

### kr
설명을 생략합니다.

## Solution
### JavaScript

*/

function greetDevelopers(list) {
  return list.map((e) => {
    e.greeting = `Hi ${e.firstName}, what do you like the most about ${e.language}?`;
    return e;
  });
}

// test
var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

var answer = [
  {
    firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  {
    firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  {
    firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  }
];

console.log(greetDevelopers(list1), answer);

/*
coding-meetup-8-higher-order-functions-series-will-all-continents-be-represented

# codewars/6kyu/Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
Difficulty: 6kyu
URL: https://www.codewars.com/kata/58291fea7ff3f640980000f9/
Tags: set, some, reduce

## Approach

### en
1.define ‘continentTargetList’ with predefined continent targets.
2.extract continent from input and save on ‘continentSet’ variable
3.iterate process-1 result, and check process-2 include that element

### kr
1.대륙 정보를 ‘continentTargetList’변수에 저장합니다.
2.input값에서 continent값을 추출하고 ‘continentSet’변수에 저장합니다.
3.process-1결과를 이터레이션 하면서 process-2에 해당 엘레멘트가 있는지 확인합니다.

## Solution
### JavaScript

*/

function allContinents(list) {
  const continentTargetList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const continentSet = new Set(list.map((e) => e.continent));
  
  return !continentTargetList.some((e) => !continentSet.has(e));
}

// test
const list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];

const list2 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];

console.log(allContinents(list1), true);
console.log(allContinents(list2), false);

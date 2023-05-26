/*
coding-meetup-4-higher-order-functions-series-find-the-first-python-developer

# codewars/7kyu/Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5827bc50f524dd029d0005f2/

## Approach

### en
1.check if there exist who use language ‘Python’
1-1 if exist get that user from array
1-2 return name with country

2. If doesn’t exist, return other comment

### kr
1.’python’ 언어를 쓰는 사람이 있는지 확인합니다
1-1 만약 있다면, 그 유저를 찾습니다.
1-2 이름과 나라를 함께 리턴합니다.

2. 만약 존재하지 않는다면 다른 코멘트를 리턴합니다.

## Solution
### JavaScript
## BestPractice
### JavaScript
#### En
Best practice use ‘find’ which means, check in once ‘lookup and get’
#### Kr
Best practice에서는 ‘find’를 이용해 ‘lookup과 get’을 한번에 합니다.
*/

function getFirstPython(list) {
  if (list.some((e) => e.language === 'Python')) {
    const pythonDeveloper = list.filter((e) => e.language === 'Python')[0];
    return `${pythonDeveloper.firstName}, ${pythonDeveloper.country}`;
  }
  
  return 'There will be no Python developers';
}

const list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

const list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  {
    firstName: 'Amar',
    lastName: 'V.',
    country: 'Bosnia and Herzegovina',
    continent: 'Europe',
    age: 32,
    language: 'Ruby'
  },
];

console.log(getFirstPython(list1), 'Victoria, Puerto Rico');
console.log(getFirstPython(list2), 'There will be no Python developers');

// best practice by [ooflorent]
function getFirstPython(list) {
  const dev = list.find(x => x.language === "Python")
  return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
}

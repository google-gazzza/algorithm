/*
coding-meetup-13-higher-order-functions-series-is-the-meetup-language-diverse

# codewars/6kyu/Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?

Difficulty: 6kyu
URL: https://www.codewars.com/kata/58381907f8ac48ae070000de

## Approach

### en
1.count ‘language’ property through reduce
2.sort process-1 based on the count as decending
3.return (biggest count) is less than or equal (lowest count *2)

### kr
1.’language’프로퍼티를 리듀스를 통해 카운팅합니다.
2.process-1결과를 count기반으로 내림차순 정렬 합니다.
3.가장 큰 카운트 값이 가장 작은 카운트값 *2 보다 작거나 같은지 리턴합니다.

## Solution
### JavaScript

*/

function isLanguageDiverse(list) {
  const count = list.reduce((acc, cur) => {
    acc[cur.language] = (acc[cur.language] || 0) + 1;
    return acc;
  }, {});
  
  const [a, b, c] = Object.entries(count)
    .sort((a, b) => {
      return b[1] - a[1];
    });
  
  return a[1] <= c[1] * 2;
}

const list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

const list2 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

const list3 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

const list4 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

console.log(isLanguageDiverse(list1), false);
//?
console.log(isLanguageDiverse(list2), false);
console.log(isLanguageDiverse(list3), true);
console.log(isLanguageDiverse(list4), true);

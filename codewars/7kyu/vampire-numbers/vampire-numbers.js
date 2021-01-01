/*
vampire-numbers

# codewars/7kyu/Vampire Numbers
Difficulty: 7kyu
URL:https://www.codewars.com/kata/54d418bd099d650fa000032d/

## Approach

### en
1.defind ‘parse’ that allow multiple parameter and convert to sorted characters
2.return parse(a*b) === parse(a,  b)

### kr
1.여러개 파라미터를 입력받아 정렬된 문자로 변환해주는 ‘parse’를 작성합니다
2.parse(a*b) === parse(a,b)를 리턴합니다.

## Solution
### JavaScript

*/

const vampire_test = (a, b) => {
  const parse = (...num) => JSON.stringify(num.reduce((acc, cur) => acc.concat([...String(cur)]), []).sort());
  return parse(a * b) === parse(a, b);
};

// test
console.log(vampire_test(21, 6), true, 'Basic: 21 * 6 = 126 should return true');
console.log(vampire_test(204, 615), true, 'Basic: 204 * 615 = 125460 should return true');
console.log(vampire_test(30, -51), true, 'One Negative: 30 * -51 = -1530 should return true');
console.log(vampire_test(-246, -510), false);
console.log(vampire_test(2947050, 8469153), true, 'Large: 2947050 * 8469153 = 24959017348650 should return true');
console.log(vampire_test(2947051, 8469153), false);

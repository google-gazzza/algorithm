/*
shortest-steps-to-a-number

# codewars/6kyu/Shortest steps to a number
difficulty: 6kyu
URL: https://www.codewars.com/kata/5cd4aec6abc7260028dcd942/
tags: math, bit-operator, bit-shift

## Approach

### en
1.define 'count' variable
2.iterate while num>0
  2-1 if n%2 === 0  Shift num to the right by 1 digits which means divide by 2, and add count 1
  2-2 if n%2 === 1 Subtract 1 from num, and add count 1
3.return count

### kr
1.'count'변수를 정의합니다.
2.num>0일 동안 이터레이션 합니다.
  2-1 만약 n%2 ===0일경우 num을 오른쪽으로 1자리 쉬프트 합니다, 다른말로 하면 2로 나눕니다, 그리고 count를 1 더합니다.
  2-2 만약 n%2 ===1일경우 1을 num에서 뺍니다, 그리고 count를 1 더합니다.
3.'count'를 리턴합니다.

## Solution
### JavaScript

*/

function shortestStepsToNum(num) {
  let count = 0;
  
  while (num > 0) {
    if (num % 2 === 0) {
      num >>= 1;
      count += 1;
    }
    if (num % 2) {
      num -= 1;
      count += 1;
    }
  }
  
  return count - 1;
}

//test
console.log(shortestStepsToNum(1), 0);
console.log(shortestStepsToNum(12), 4);
console.log(shortestStepsToNum(16), 4);
console.log(shortestStepsToNum(71), 9);

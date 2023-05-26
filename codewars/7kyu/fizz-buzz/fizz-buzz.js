/*
fizz-buzz
# codewars/7kyu/Fizz Buzz
difficulty: 7kyu
URL: https://www.codewars.com/kata/5300901726d12b80e8000498/
tags: fundamental

## Approach

### en
This problem is about check divisibility 3, 5, 15
iterate 1 -> n, and
if divisible by 15, add the 'FizzBuzz' to the result,
if divisible by 5, add the 'Buzz' to the result,
if divisible by 3, add the 'Fizz' to the result,
if none of the cases matched, then add iterate index to the results,

### kr
이 문제는 3, 5, 15으로 나눠지는지 확인하는 문제입니다.
1->n까지 이터레이션 합니다.
만약 15로 나눌수 있다면 'FizzBuzz'를 결과에 더합니다,
만약 5로 나눌수 있다면 'Buzz'를 결과에 더합니다,
만약 3로 나눌수 있다면 'Fizz'를 결과에 더합니다,
만약 모든 케이스가 매치되지 않는다면 이터레이션 인덱스를 결과에 더합니다.

## Solution
### JavaScript

*/
function fizzbuzz(n) {
  const result = [];
  
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else {
      if (i % 5 === 0) {
        result.push('Buzz');
      }
      if (i % 3 === 0) {
        result.push('Fizz');
      }
      if (i % 3 !== 0 && i % 5 !== 0) {
        result.push(i);
      }
    }
  }
  
  return result;
}

// test
var expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];
console.log(JSON.stringify(fizzbuzz(10)), JSON.stringify(expected), 'Fails with 10 numbers!');

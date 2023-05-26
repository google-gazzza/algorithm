/*
atm

# codewars/7kyu/atm
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5635e7cb49adc7b54500001c
Tags: greedy-algorithm

## Approach

### en
1.Create a variable'moneys' and prepare the money prepared in advance in descending order.
2.iterate ‘moneys’
2-1 check quotient(n/money), and replace n to n modular ‘money’(500, 200, … 10)
2-2 return quotient
3.reduce all moneys count(2-2) and return

### kr
1.’moneys'변수를 만들고 미리 준비된 돈을 내림차순으로 준비합니다.
2.’moneys’를 이터레이션 합니다.
2-1. (n/money)의 몫을 확인하고, n을 n % ‘money’(500, 200, … 10)로 바꿉니다.
2-2. 몫을 반환합니다.
3. 2-2에서 반환된 모든 몫을 합산한뒤 리턴합니다.

## Solution
### JavaScript

*/

function solve(n) {
  const moneys = [500, 200, 100, 50, 20, 10];
  
  if (n % 10 !== 0) {
    return -1;
  }
  
  return moneys.map((e) => {
    const newCount = Math.floor((n / e));
    n %= e;
    
    return newCount;
  }).reduce((acc, cur) => acc + cur);
}

// test
console.log(solve(770), 4, "Wrong result for 770");
console.log(solve(550), 2, "Wrong result for 550");
console.log(solve(10), 1, "Wrong result for 10");
console.log(solve(1250), 4, "Wrong result for 1250");
console.log(solve(125), -1, "Wrong result for 125");
console.log(solve(666), -1, "Wrong result for 666");
console.log(solve(42), -1, "Wrong result for 42");

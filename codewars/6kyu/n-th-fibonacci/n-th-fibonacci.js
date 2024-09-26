/*
n-th-fibonacci

# codewars/6kyu/N-th Fibonacci
Difficulty: 6kyu
URL: https://www.codewars.com/kata/522551eee9abb932420004a0/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function nthFibo(n, cur = 0, next = 1) {
  if (n === 1) {
    return cur;
  }
  
  return nthFibo(n - 1, next, cur + next);
}

// test
console.log(nthFibo(1), 0, "1-st Fibo");
console.log(nthFibo(2), 1, "2-nd Fibo");
console.log(nthFibo(3), 1, "3-rd Fibo");
console.log(nthFibo(4), 2, "4-th Fibo");

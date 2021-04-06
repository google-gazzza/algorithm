/*
sum-of-cubes

# codewars/7kyu/Sum of Cubes
Difficulty: 7kyu
URL: https://www.codewars.com/kata/59a8570b570190d313000037
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function sumCubes(n) {
  let sum = 0;
  
  for (let i = 1; i < n + 1; i += 1) {
    sum += (i ** 3);
  }
  
  return sum;
}

// test
console.log(sumCubes(1), 1);
console.log(sumCubes(2), 9);
console.log(sumCubes(3), 36);
console.log(sumCubes(4), 100);
console.log(sumCubes(10), 3025);
console.log(sumCubes(123), 58155876);

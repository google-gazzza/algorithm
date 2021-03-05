/*

integers-recreation-one

# codewars/5kyu/Integers: Recreation One
Difficulty: 5kyu
URL: https://www.codewars.com/kata/55aa075506463dac6600010d
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const factorization = (n) => {
  const result = [];
  let count = 1;
  
  while (count <= n) {
    if (n % count === 0) {
      result.push(count);
    }
    count += 1;
  }
  
  return result;
};

const listSquared = (m, n) => {
  const result = [];
  
  while (m <= n) {
    const sum = factorization(m).reduce((acc, cur) => acc + (cur ** 2), 0);
    if (Math.sqrt(sum) % 1 === 0) {
      result.push([m, sum]);
    }
    m += 1;
  }
  
  return result;
};
